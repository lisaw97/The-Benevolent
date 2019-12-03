const STOCK_API_KEY = process.env.REACT_APP_STOCK_API;

export const fetchStocks = () => (
    $.ajax({
        url: '/api/stocks',
        method: 'GET'
    })
);

export const fetchStock = symbol => (
    $.ajax({
        url: `https://cloud.iexapis.com/stable/stock/${symbol}/company/?token=${STOCK_API_KEY}`,
        method: 'GET'
    })
);

export const fetchIntradayPrices = symbol => (
    $.ajax({
        url: `https://cloud.iexapis.com/stable/stock/${symbol}/intraday-prices/?chartInterval=5&token=${STOCK_API_KEY}`,
        method: 'GET'
    })
)

export const fetch1YPrices = symbol => (
    $.ajax({
        url: `https://cloud.iexapis.com/stable/stock/${symbol}/chart/1y/?token=${STOCK_API_KEY}`,
        method: 'GET'
    })
)

export const fetch5YPrices = symbol => (
    $.ajax({
        url: `https://cloud.iexapis.com/stable/stock/${symbol}/chart/5y/?token=${STOCK_API_KEY}`,
        method: 'GET'
    })
)