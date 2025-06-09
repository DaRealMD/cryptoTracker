import React, { useState, useEffect } from 'react';
import Header from '../components/Header.js';
import SearchAndFilters from '../components/SearchAndFilters.js';
import Cryptotable from '../components/CryptoTable.js';
import LoadingSpinner from '../components/LoadingSpinner.js';
import ErrorMessage from '../components/ErrorMessage.js';

const CryptoListPage = ({
    cryptos,
    loading,
    error,
    onRefresh,
    onCryptoSelect
}) => {
    const [filteredCryptos, setFilteredCryptos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('marketCap');
    const [sortOrder, setSortOrder] = useState('desc');
    const [priceFilter, setPriceFilter] = useState('all');

    // filter and sort logic
    useEffect(() => {
        let filtered = [...cryptos];

        // search filter
        if (searchTerm) {
            filtered = filtered.filter(crypto => 
                crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // price filter
        if (priceFilter !== 'all') {
            switch (priceFilter) {
                case 'under1':
                    filtered = filtered.filter(crypto => crypto.current_price < 1);
                    break;
                case '1to100':
                    filtered = filtered.filter(crypto => crypto.current_price >= 1 && crypto.current_price <= 100);
                    break;
                case 'over100':
                    filtered = filtered.filter(crypto => crypto.current_price >100);
                    break;
                default:
                    break;
            }
        }

        // sorting
        filtered.sort((a, b) => {
            let aValue = a[sortBy];
            let bValue = b[sortBy];

            if (sortOrder === 'desc') {
                return bValue - aValue;  // descending order
            } else {
                return aValue - bValue;  // ascending order
            }
        });

        setFilteredCryptos(filtered);
    }, [cryptos, searchTerm, sortBy, sortOrder, priceFilter])

    const handleSortChange = (newSortBy) => {
        if (newSortBy === sortBy) {
            setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
        } else {
            setSortBy(newSortBy);
            setSortOrder('desc'); // Reset to descending order on new sort
        }
    };

    if (loading) {
        return <LoadingSpinner />
    }

    if (error) {
        return <ErrorMessage error = {error} onRetry = { onRefresh } />;
    }


    return (
        <div className = "min-h-screen bg-gray-50">
            <Header onRefresh = {onRefresh} />

            <div className = "max-w-7xl mx-auto px-4 py-6">
                <SearchAndFilters
                    searchTerm = {searchTerm}
                    onSearchChange = {setSearchTerm}
                    sortBy = {sortBy}
                    sortOrder = {sortOrder}
                    onSortChange = {handleSortChange}
                    priceFilter = {priceFilter}
                    onPriceFilterChange = {setPriceFilter}
                />

                <Cryptotable
                    cryptos = {filteredCryptos}
                    onCryptoSelect = {onCryptoSelect}
                />

                {filteredCryptos.length === 0 && !loading && (
                    <div className = "text-center py-12">
                        <p className = "text-gray-500">No cryptocurrencies found matching your criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CryptoListPage;