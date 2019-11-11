import * as StockApiUtil from '../util/stock_api_util';

export const RECEIVE_PRICES = 'RECEIVE_PRICES';

const receivePrices = prices => ({
    type: RECEIVE_PRICES,
    graph
});

export const fetchPrices = symbol => dispatch => (
    StockApiUtil.fetchPrices(symbol).then(
        prices => dispatch(receivePrices(prices))
    )
);

