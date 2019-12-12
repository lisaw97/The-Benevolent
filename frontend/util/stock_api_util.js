export const fetchStocks = () => (
    $.ajax({
        url: '/api/stocks',
        method: 'GET'
    })
);

export const fetchStock = symbol =>
         $.ajax({
           url: `https://cloud.iexapis.com/stable/stock/${symbol}/company/?token=pk_04d56a063f084eb5954568547bf119cc`,
           method: "GET"
         });

export const fetchIntradayPrices = symbol => (
    $.ajax({
        url: `https://cloud.iexapis.com/stable/stock/${symbol}/intraday-prices/?chartInterval=5&token=pk_04d56a063f084eb5954568547bf119cc`,
        method: 'GET'
    })
)

export const fetch1YPrices = symbol => (
    $.ajax({
        url: `https://cloud.iexapis.com/stable/stock/${symbol}/chart/1y/?token=pk_04d56a063f084eb5954568547bf119cc`,
        method: 'GET'
    })
)

export const fetch5YPrices = symbol => (
    $.ajax({
        url: `https://cloud.iexapis.com/stable/stock/${symbol}/chart/5y/?token=pk_04d56a063f084eb5954568547bf119cc`,
        method: 'GET'
    })
)