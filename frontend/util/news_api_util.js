export const fetchGeneralNews = () => {
    return $.ajax({
        url: `https://newsapi.org/v2/top-headlines?country=us&apiKey=89ada765e31248c5b4658875ca682421`,
      method: "GET"
    });
}

export const fetchStockNews = (symbol, last) =>
         $.ajax({
           url: `https://cloud.iexapis.com/stable/stock/${symbol}/news/last/${last}/?token=pk_04d56a063f084eb5954568547bf119cc`,
           method: "GET"
         });