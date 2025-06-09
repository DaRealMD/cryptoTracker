import React from 'react';
import { TrendingUp, TrendingDown, Star } from 'lucide-react';
import { formatPrice, formatMarketCap, formatPercentage } from '../utils/formatters';

const CryptoTableRow = ({ crypto, onSelect }) => {
  const handleRowClick = () => {
    onSelect(crypto);
  };


  const PriceChangeCell = ({ percentage, showIcon = true }) => {
    if (!percentage) return <span className="text-gray-500">N/A</span>;
    
    const isPositive = percentage >= 0;
    const colorClass = isPositive ? 'text-green-600' : 'text-red-600';
    const Icon = isPositive ? TrendingUp : TrendingDown;
    
    return (
      <div className={`text-sm font-medium flex items-center justify-end ${colorClass}`}>
        {showIcon && <Icon className="w-4 h-4 mr-1" />}
        {formatPercentage(percentage)}
      </div>
    );
  };

  return (
    <tr 
      className="hover:bg-gray-50 cursor-pointer transition-colors"
      onClick={handleRowClick}
    >
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-900">{crypto.market_cap_rank}</span>
        </div>
      </td>
      
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <img className="h-8 w-8 rounded-full" src={crypto.image} alt={crypto.name} />
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{crypto.name}</div>
            <div className="text-sm text-gray-500 uppercase">{crypto.symbol}</div>
          </div>
        </div>
      </td>
      
      <td className="px-6 py-4 whitespace-nowrap text-right">
        <div className="text-sm font-medium text-gray-900">
          {formatPrice(crypto.current_price)}
        </div>
      </td>
      
      <td className="px-6 py-4 whitespace-nowrap text-right">
        <PriceChangeCell percentage={crypto.price_change_percentage_1h_in_currency} />
      </td>
      
      <td className="px-6 py-4 whitespace-nowrap text-right">
        <PriceChangeCell percentage={crypto.price_change_percentage_24h} />
      </td>
      
      <td className="px-6 py-4 whitespace-nowrap text-right">
        <PriceChangeCell percentage={crypto.price_change_percentage_7d_in_currency} />
      </td>
      
      <td className="px-6 py-4 whitespace-nowrap text-right">
        <div className="text-sm font-medium text-gray-900">
          {formatMarketCap(crypto.market_cap)}
        </div>
      </td>
      
      <td className="px-6 py-4 whitespace-nowrap text-right">
        <div className="text-sm text-gray-900">
          {formatMarketCap(crypto.total_volume)}
        </div>
      </td>
      
    </tr>
  );
};

export default CryptoTableRow;