import * as StockApiUtil from '../util/stock_api_util';

export const RECEIVE_STOCKS = 'RECEIVE_STOCKS';
export const RECEIVE_STOCK = 'RECEIVE_STOCK';

const receiveStocks = stocks => ({
    type: RECEIVE_STOCKS,
    stocks
});

const receiveStock = stock => ({
    type: RECEIVE_STOCK,
    stock
});

export const fetchStocks = () => dispatch => {
    return StockApiUtil.fetchStocks().then(
        stocks => dispatch(receiveStocks(stocks))
    )
};

export const fetchStock = symbol => dispatch => (
    StockApiUtil.fetchStock(symbol).then(
        stock => dispatch(receiveStock(stock))
    )
);