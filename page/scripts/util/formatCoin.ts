export const formatCurrency = (value: number) => {
  let decimals = 2;

  if (value < 0.95) {
    decimals = 6;
  } else if (value < 10) {
    decimals = 2; 
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
};
export const formatPercent = (value: number) => {
  return `${value.toFixed(2)}%`;
};