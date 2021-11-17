const MILLION = 1_000_000;
const THOUSAND = 1_000;

export const minimizeNumber = (number: number) => {
  if (number >= MILLION) {
    return (number / MILLION).toFixed(1) + 'M';
  } else if (number >= THOUSAND) {
    return (number / THOUSAND).toFixed(1) + 'K';
  }
  return +number;
};
