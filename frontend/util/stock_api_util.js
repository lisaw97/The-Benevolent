export const fetchStocks = () => (
    $.ajax({
        url: '/api/stocks',
        method: 'GET'
    })
);

export const fetchStock = symbol => (
    $.ajax({
        url: `https://cloud.iexapis.com/stable/stock/${symbol}/company/?token=pk_d9fc28e6b9594efa97b112ac9c920c87`,
        method: 'GET'
    })
);

export const fetchIntradayPrices = symbol => (
    $.ajax({
        url: `https://cloud.iexapis.com/stable/stock/${symbol}/intraday-prices/?chartInterval=5&token=pk_d9fc28e6b9594efa97b112ac9c920c87`,
        method: 'GET'
    })
)

export const fetch1YPrices = symbol => (
    $.ajax({
        url: `https://cloud.iexapis.com/stable/stock/${symbol}/chart/1y/?token=pk_d9fc28e6b9594efa97b112ac9c920c87`,
        method: 'GET'
    })
)