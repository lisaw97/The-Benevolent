// import * as StockApiUtil from '../util/stock_api_util';
import * as NewsApiUtil from '../util/news_api_util';

export const RECEIVE_GENERAL_NEWS = 'RECEIVE_GENERAL_NEWS';
export const RECEIVE_STOCK_NEWS = 'RECEIVE_STOCK_NEWS';

const receiveGeneralNews = news => ({
    type: RECEIVE_GENERAL_NEWS,
    news
});

const receiveStockNews = news => ({
    type: RECEIVE_STOCK_NEWS,
    news
});

export const fetchGeneralNews = () => dispatch => (
    NewsApiUtil.fetchGeneralNews().then(
        news => dispatch(receiveGeneralNews(news))
    )
);

export const fetchStockNews = (symbol, last) => dispatch => (
    NewsApiUtil.fetchStockNews(symbol, last).then(
        news => dispatch(receiveStockNews(news))
    )
);

