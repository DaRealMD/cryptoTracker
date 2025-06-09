// Simulate delay
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Placeholder function to mimic fetching list of cryptos
export const fetchCryptocurrencies = async () => {
    await sleep(500); // simulate network delay
    return [
        {
            id: 'bitcoin',
            name: 'Bitcoin',
            symbol: 'btc',
            current_price: 50000,
            market_cap: 900000000,
            market_cap_rank: 1,
            total_volume: 45000000,
            image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
            price_change_percentage_24h: 2.5,
            price_change_percentage_7d_in_currency: -1.2,
            price_change_percentage_1h_in_currency: 0.3,
            circulating_supply: 19000000,
            total_supply: 21000000,
            ath: 69000,
            ath_date: '2021-11-10T00:00:00.000Z',
            atl: 65,
            atl_date: '2013-07-06T00:00:00.000Z',
        }
    ];
};

export const fetchCryptocurrencyDetail = async (id) => {
    await sleep(300);
    return {
        id: id,
        name: 'Bitcoin',
        symbol: 'btc',
        current_price: 50000,
        market_cap: 900000000,
        market_cap_rank: 1,
        total_volume: 45000000,
        image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
        price_change_percentage_24h: 2.5,
        price_change_percentage_7d_in_currency: -1.2,
        price_change_percentage_1h_in_currency: 0.3,
        circulating_supply: 19000000,
        total_supply: 21000000,
        ath: 69000,
        ath_date: '2021-11-10T00:00:00.000Z',
        atl: 65,
        atl_date: '2013-07-06T00:00:00.000Z',
    };
};

export const fetchHistoricalData = async (id, days = 7) => {
    await sleep(200);
    return {
        prices: Array.from({ length: days }, (_, i) => [
            Date.now() - i * 86400000, // daily timestamps
            50000 + Math.random() * 5000, // mock prices
        ]).reverse(),
    };
};
