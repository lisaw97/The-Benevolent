export const fetchStock = ticker => (
    $.ajax({
        url: `https://cloud.iexapis.com/stable/stock/${ticker}/company/?token=pk_d9fc28e6b9594efa97b112ac9c920c87`,
        method: 'GET'
    })
);