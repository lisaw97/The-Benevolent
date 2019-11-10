import * as StockApiUtil from '../util/stock_api_util';

export const RECEIVE_NEWS = 'RECEIVE_NEWS';

const receiveNews = news => ({
    type: RECEIVE_NEWS,
    news
});

export const fetchNews = (symbol, last) => dispatch => (
    StockApiUtil.fetchNews(symbol, last).then(
        news => dispatch(receiveNews(news))
    )
);