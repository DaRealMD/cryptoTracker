export const formatPrice = (price) => {
  if (!price || price === 0) return '$0.00';
  
  if (price < 0.01) return `$${price.toFixed(6)}`;
  if (price < 1) return `$${price.toFixed(4)}`;
  if (price < 100) return `$${price.toFixed(2)}`;
  
  return `$${price.toLocaleString(undefined, { 
    minimumFractionDigits: 2, 
    maximumFractionDigits: 2 
  })}`;
};

export const formatMarketCap = (marketCap) => {
  if (!marketCap || marketCap === 0) return '$0';
  
  if (marketCap >= 1e12) return `$${(marketCap / 1e12).toFixed(2)}T`;
  if (marketCap >= 1e9) return `$${(marketCap / 1e9).toFixed(2)}B`;
  if (marketCap >= 1e6) return `$${(marketCap / 1e6).toFixed(2)}M`;
  if (marketCap >= 1e3) return `$${(marketCap / 1e3).toFixed(2)}K`;
  
  return `$${marketCap.toLocaleString()}`;
};

export const formatPercentage = (percentage) => {
  if (percentage === null || percentage === undefined) return 'N/A';
  
  const formatted = percentage.toFixed(2);
  return `${formatted >= 0 ? '+' : ''}${formatted}%`;
};

export const formatVolume = (volume) => {
  return formatMarketCap(volume); // Same formatting as market cap
};

export const formatSupply = (supply, symbol) => {
  if (!supply) return 'N/A';
  
  if (supply >= 1e9) return `${(supply / 1e9).toFixed(2)}B ${symbol}`;
  if (supply >= 1e6) return `${(supply / 1e6).toFixed(2)}M ${symbol}`;
  if (supply >= 1e3) return `${(supply / 1e3).toFixed(2)}K ${symbol}`;
  
  return `${supply.toLocaleString()} ${symbol}`;
};

export const formatDate = (dateString) => {
  if (!dateString) return 'N/A';
  
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

export const formatDateTime = (dateString) => {
  if (!dateString) return 'N/A';
  
  const date = new Date(dateString);
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};