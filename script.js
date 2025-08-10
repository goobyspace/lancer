import { createWriteStream } from "fs";

const numbers = Array.from({ length: 50 }, (_, i) => i + 1);
const reservesOne = [
  [...numbers, 7, 19, 31],
  [...numbers, 13, 23, 35],
  [...numbers, 29, 41, 49],
  [...numbers, 37, 43, 47],
  [...numbers, 2, 5, 11],
];
const reservesTwo = [
  [...numbers, 4, 14, 24],
  [...numbers, 8, 18, 28],
  [...numbers, 12, 22, 32],
];

const scramblesReserveOne = reservesOne.map((arr) =>
  arr.slice().sort(() => Math.random() - 0.5)
);
const scramblesReserveTwo = reservesTwo.map((arr) =>
  arr.slice().sort(() => Math.random() - 0.5)
);

const indexFilestream = createWriteStream(
  `./src/components/pages/store/item-order.ts`
);
indexFilestream.write(`export const weeklyRankOneReserves = [
${scramblesReserveOne.map((arr) => `  [${arr.join(", ")}]`).join(",\n")}
];
export const weeklyRankTwoReserves = [
${scramblesReserveTwo.map((arr) => `  [${arr.join(", ")}]`).join(",\n")}
];`);
