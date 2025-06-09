import './App.css';

import React, { useState, useEffect } from 'react';
import CryptoListPage from './pages/CryptoListPage.js';
import CryptoDetailPage from './pages/CryptoDetailPage.js';
import { fetchCryptocurrencies } from './services/cryptoService_deploy.js';
import './styles/globals.css';

const App = () => {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const[favorites, setFavorites] = useState(new Set());

  const loadCryptos = async () => {
    try{
      setLoading(true);;
      setError(null);
      const data = await fetchCryptocurrencies();
      setCryptos(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCryptos();
  }, []);

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  }

  const handleCryptoSelect = (crypto) => {
    setSelectedCrypto(crypto);
  };

  const handleBackToList = () => {
    setSelectedCrypto(null);
  };

  if (selectedCrypto) {
    return (
      <CryptoDetailPage
        crypto = {selectedCrypto}
        onBack = {handleBackToList}
      />
    );
  }
  

  return (
    <CryptoListPage
      cryptos = {cryptos}
      loading = {loading}
      error = {error}
      favorites = {favorites}
      onRefresh = {loadCryptos}
      onToggleFavorite = {toggleFavorite}
      onCryptoSelect = {handleCryptoSelect} 
      />
  );

}

export default App;
