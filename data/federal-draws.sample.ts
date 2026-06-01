export type FederalDrawPrize = {
  position: 1 | 2 | 3 | 4 | 5;
  number: string;
};

export type FederalDrawSample = {
  contestNumber: number;
  drawDate: string;
  sourceLabel: string;
  prizes: [FederalDrawPrize, FederalDrawPrize, FederalDrawPrize, FederalDrawPrize, FederalDrawPrize];
};

/**
 * AMOSTRA CONTROLADA PARA VALIDAÇÃO DE FLUXO.
 *
 * Estes registros não representam base histórica oficial completa.
 * Nesta fase, a finalidade é validar a importação idempotente e a decomposição
 * dos prêmios no banco, sem API externa, crawler ou automação.
 */
export const federalDrawsSample: FederalDrawSample[] = [
  {
    contestNumber: 900001,
    drawDate: "2026-01-03T00:00:00.000Z",
    sourceLabel: "amostra-controlada-fase-2",
    prizes: [
      { position: 1, number: "12345" },
      { position: 2, number: "98765" },
      { position: 3, number: "23456" },
      { position: 4, number: "34567" },
      { position: 5, number: "45678" },
    ],
  },
  {
    contestNumber: 900002,
    drawDate: "2026-01-07T00:00:00.000Z",
    sourceLabel: "amostra-controlada-fase-2",
    prizes: [
      { position: 1, number: "01987" },
      { position: 2, number: "50604" },
      { position: 3, number: "67001" },
      { position: 4, number: "88888" },
      { position: 5, number: "10203" },
    ],
  },
];
