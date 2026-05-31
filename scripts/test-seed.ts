import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const draw = await prisma.federalDraw.create({
    data: {
      contestNumber: 999999,
      drawDate: new Date(),
      firstPrize: "12345",
      secondPrize: "23456",
      thirdPrize: "34567",
      fourthPrize: "45678",
      fifthPrize: "56789",
      sourceUrl: "teste-local",
    },
  });

  console.log("Registro criado:");
  console.log(draw);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });