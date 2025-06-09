const BASE_URL = 'https://api.coingecko.com/api/v3/'
const API_KEY = process.env.REACT_APP_COINGECKO_API_KEY;

export const fetchCryptocurrencies = async () => {
    const response = await fetch(
        `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`,
        {
            headers: {
                'Accept': 'application/json',
                'x-cg-demo-api-key': API_KEY,
            }
        }
    );
        
    if (!response.ok) {
        throw new Error('Failed to fetch cryptocurrency data');
    }
    return response.json();
}

export const fetchCryptocurrencyDetail = async (id) => {
    const response = await fetch(
        `${BASE_URL}/coins/${id}?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=true`,
        {
            headers: {
                'Accept': 'application/json',
                'x-cg-demo-api-key': API_KEY,
            }
        }
    );
    if (!response.ok) {
        throw new Error('Failed to fetch cryptocurrency details');
    }
    return response.json();
}

export const fetchHistoricalData = async (id, days = 7) => {
    const response = await fetch(
        `${BASE_URL}/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`,
        {
            headers: {
                'Accept': 'application/json',
                'x-cg-demo-api-key': API_KEY,
            }
        }
    )
    if (!response.ok) {
        throw new Error('Failed to fetch historical data');
    }
    return response.json();
}
