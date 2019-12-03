const NEWS_API_KEY = process.env.REACT_APP_NEWS_API;

export const fetchGeneralNews = () => (
    $.ajax({
        url: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`,
        method: 'GET'
    })
)

export const fetchStockNews = (symbol, last) => (
    $.ajax({
        url: `https://cloud.iexapis.com/stable/stock/${symbol}/news/last/${last}/?token=${NEWS_API_KEY}`,
        method: 'GET'
    })
);