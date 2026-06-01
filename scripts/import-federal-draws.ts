import { PrismaClient } from "@prisma/client";
import { federalDrawsSample, type FederalDrawSample, type FederalDrawPrize } from "../data/federal-draws.sample";

const prisma = new PrismaClient();

type DecomposedDrawNumber = {
  prizePosition: number;
  fullNumber: string;
  lastTwoDigits: string;
  lastThreeDigits: string;
  thousand: number;
  hundredRange: number;
  twoHundredRange: number;
  fiveHundredRange: number;
  drawDate: Date;
};

function assertFiveDigitPrize(prize: FederalDrawPrize, contestNumber: number) {
  if (!/^\d{5}$/.test(prize.number)) {
    throw new Error(
      `Concurso ${contestNumber}, prêmio ${prize.position}: número inválido. Use exatamente 5 dígitos.`,
    );
  }
}

function decomposePrize(prize: FederalDrawPrize, drawDate: Date): DecomposedDrawNumber {
  const lastThreeDigits = prize.number.slice(-3);
  const thousand = Number(lastThreeDigits);

  return {
    prizePosition: prize.position,
    fullNumber: prize.number,
    lastTwoDigits: prize.number.slice(-2),
    lastThreeDigits,
    thousand,
    hundredRange: Math.floor(thousand / 100) * 100,
    twoHundredRange: Math.floor(thousand / 200) * 200,
    fiveHundredRange: Math.floor(thousand / 500) * 500,
    drawDate,
  };
}

function getPrizeByPosition(draw: FederalDrawSample, position: FederalDrawPrize["position"]) {
  const prize = draw.prizes.find((item) => item.position === position);

  if (!prize) {
    throw new Error(`Concurso ${draw.contestNumber}: prêmio ${position} não encontrado.`);
  }

  return prize.number;
}

async function importDraw(draw: FederalDrawSample) {
  const existingDraw = await prisma.federalDraw.findUnique({
    where: { contestNumber: draw.contestNumber },
    select: { id: true, contestNumber: true },
  });

  if (existingDraw) {
    return { status: "skipped" as const, contestNumber: existingDraw.contestNumber };
  }

  const drawDate = new Date(draw.drawDate);

  if (Number.isNaN(drawDate.getTime())) {
    throw new Error(`Concurso ${draw.contestNumber}: data inválida.`);
  }

  for (const prize of draw.prizes) {
    assertFiveDigitPrize(prize, draw.contestNumber);
  }

  const decomposedNumbers = draw.prizes.map((prize) => decomposePrize(prize, drawDate));

  await prisma.federalDraw.create({
    data: {
      contestNumber: draw.contestNumber,
      drawDate,
      firstPrize: getPrizeByPosition(draw, 1),
      secondPrize: getPrizeByPosition(draw, 2),
      thirdPrize: getPrizeByPosition(draw, 3),
      fourthPrize: getPrizeByPosition(draw, 4),
      fifthPrize: getPrizeByPosition(draw, 5),
      sourceUrl: draw.sourceLabel,
      numbers: {
        create: decomposedNumbers,
      },
    },
  });

  return { status: "created" as const, contestNumber: draw.contestNumber };
}

async function main() {
  console.log("Importação inicial da Loteria Federal - amostra controlada da Fase 2");
  console.log("Os dados locais não representam histórico oficial completo.\n");

  const results = [];

  for (const draw of federalDrawsSample) {
    results.push(await importDraw(draw));
  }

  const created = results.filter((item) => item.status === "created").length;
  const skipped = results.filter((item) => item.status === "skipped").length;

  console.log(`Concursos criados: ${created}`);
  console.log(`Concursos ignorados por já existirem: ${skipped}`);

  for (const result of results) {
    const label = result.status === "created" ? "criado" : "já existia";
    console.log(`- Concurso ${result.contestNumber}: ${label}`);
  }
}

main()
  .catch((error) => {
    console.error("Falha ao importar resultados da Federal:");
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
