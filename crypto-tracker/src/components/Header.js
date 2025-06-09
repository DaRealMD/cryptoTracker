import React from 'react';
import { RefreshCw } from 'lucide-react';

const attribution = <a href = 'https://www.coingecko.com/en/api' target = "_blank" rel = "noopener noreferrer">CoinGecko API</a>

const Header = ({ onRefresh }) => {
  return (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Crypto Tracker</h1>
            <p className="text-gray-600 mt-1">Powered by { attribution }</p>
          </div>
          <button 
            onClick={onRefresh}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;