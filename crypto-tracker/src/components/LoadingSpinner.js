import React from 'react';
import { RefreshCw } from 'lucide-react';

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
        <p className="text-gray-600">Loading crypto data...</p>
        <p className="text-sm text-gray-400 mt-2">Fetching latest market information</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;