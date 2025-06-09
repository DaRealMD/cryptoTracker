import React from 'react';
import { BarChart3 } from 'lucide-react';
import { formatPrice, formatMarketCap, formatPercentage } from '../utils/formatters';

const CryptoDetailPage = ({ crypto, onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button 
            onClick={onBack}
            className="text-blue-600 hover:text-blue-800 font-medium mb-4 transition-colors"
          >
            ← Back to Listings
          </button>
          <div className="flex items-center gap-4">
            <img src={crypto.image} alt={crypto.name} className="w-12 h-12" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{crypto.name}</h1>
              <p className="text-gray-500 uppercase">{crypto.symbol}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">About {crypto.name}</h2>
              <div className="prose max-w-none">
                <p className="text-gray-600">
                  {crypto.name} ({crypto.symbol.toUpperCase()}) is currently ranked #{crypto.market_cap_rank} by market capitalization. This cryptocurrency has shown significant market activity with a current price of {formatPrice(crypto.current_price)}.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">All-Time High:</span>
                    <p className="text-gray-600">{formatPrice(crypto.ath)} (on {new Date(crypto.ath_date).toLocaleDateString()})</p>
                  </div>
                  <div>
                    <span className="font-medium">All-Time Low:</span>
                    <p className="text-gray-600">{formatPrice(crypto.atl)} (on {new Date(crypto.atl_date).toLocaleDateString()})</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Market Stats</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Current Price</p>
                  <p className="text-2xl font-bold">{formatPrice(crypto.current_price)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">24h Change</p>
                  <p className={`text-lg font-semibold ${crypto.price_change_percentage_24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {formatPercentage(crypto.price_change_percentage_24h)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">7d Change</p>
                  <p className={`text-lg font-semibold ${crypto.price_change_percentage_7d_in_currency >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {formatPercentage(crypto.price_change_percentage_7d_in_currency)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Market Cap</p>
                  <p className="text-lg font-semibold">{formatMarketCap(crypto.market_cap)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Volume (24h)</p>
                  <p className="text-lg font-semibold">{formatMarketCap(crypto.total_volume)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Market Cap Rank</p>
                  <p className="text-lg font-semibold">#{crypto.market_cap_rank}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Circulating Supply</p>
                  <p className="text-lg font-semibold">
                    {crypto.circulating_supply?.toLocaleString()} {crypto.symbol.toUpperCase()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Supply</p>
                  <p className="text-lg font-semibold">
                    {crypto.total_supply ? `${crypto.total_supply.toLocaleString()} ${crypto.symbol.toUpperCase()}` : 'N/A'}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Price Performance</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">1h</span>
                  <span className={`font-medium ${crypto.price_change_percentage_1h_in_currency >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {formatPercentage(crypto.price_change_percentage_1h_in_currency)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">24h</span>
                  <span className={`font-medium ${crypto.price_change_percentage_24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {formatPercentage(crypto.price_change_percentage_24h)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">7d</span>
                  <span className={`font-medium ${crypto.price_change_percentage_7d_in_currency >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {formatPercentage(crypto.price_change_percentage_7d_in_currency)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoDetailPage;