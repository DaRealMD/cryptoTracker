import React from 'react';
import { Search } from 'lucide-react';

const SearchAndFilters = ({ 
  searchTerm, 
  onSearchChange, 
  sortBy, 
  sortOrder, 
  onSortChange, 
  priceFilter, 
  onPriceFilterChange 
}) => {
  const handleSortByChange = (e) => {
    onSortChange(e.target.value);
  };

  const handleSortOrderToggle = () => {
    onSortChange(sortBy); // This will toggle the order
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search cryptocurrencies..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div className="flex gap-2">
          <select
            value={sortBy}
            onChange={handleSortByChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="market_cap">Market Cap</option>
            <option value="current_price">Price</option>
            <option value="price_change_percentage_24h">24h Change</option>
            <option value="total_volume">Volume</option>
          </select>
          
          <button
            onClick={handleSortOrderToggle}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            title={`Sort ${sortOrder === 'desc' ? 'ascending' : 'descending'}`}
          >
            {sortOrder === 'desc' ? '↓' : '↑'}
          </button>
          
          <select
            value={priceFilter}
            onChange={(e) => onPriceFilterChange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Prices</option>
            <option value="under1">Under $1</option>
            <option value="1to100">$1 - $100</option>
            <option value="over100">Over $100</option>
          </select>
        </div>
      </div>
      
      <div className="mt-3 text-sm text-gray-500">
        <span>Sort by {sortBy.replace('_', ' ')} ({sortOrder === 'desc' ? 'highest first' : 'lowest first'})</span>
        {priceFilter !== 'all' && (
          <span className="ml-4">• Filtered by price range</span>
        )}
      </div>
    </div>
  );
};

export default SearchAndFilters;