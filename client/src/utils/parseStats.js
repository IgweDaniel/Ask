const K = 1000,
  M = 1000000;

export const parseStats = (value) =>
  value < K ? value : value >= M ? `${value / M}M` : `${value / K}K`;
