const stock_key = "pk_0bb2b9065996478c82fa4583b57d589b ";
export const fetchStocks = () => (
    $.ajax({
        url: '/api/stocks',
        method: 'GET'
    })
);

export const fetchStock = symbol => (
    $.ajax({
        url: `https://cloud.iexapis.com/stable/stock/${symbol}/company/?token=${stock_key}`,
        method: 'GET'
    })
);

export const fetchIntradayPrices = symbol => (
    $.ajax({
        url: `https://cloud.iexapis.com/stable/stock/${symbol}/intraday-prices/?chartInterval=5&token=${stock_key}`,
        method: 'GET'
    })
)

export const fetch1YPrices = symbol =>
         $.ajax({
           url: `https://cloud.iexapis.com/stable/stock/${symbol}/batch?&types=chart&range=1Y&token=${stock_key}`,
           method: "GET"
         });

export const fetch5YPrices = symbol => (
    $.ajax({
        url: `https://cloud.iexapis.com/stable/stock/${symbol}/chart/5y/?token=${stock_key}`,
        method: 'GET'
    })
)