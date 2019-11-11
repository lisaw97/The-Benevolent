import * as StockApiUtil from '../util/stock_api_util';

export const RECEIVE_INTRADAY_PRICES = 'RECEIVE_INTRADAY_PRICES';

const receiveIntradayPrices = prices => ({
    type: RECEIVE_INTRADAY_PRICES,
    prices
});

export const fetchIntradayPrices = symbol => dispatch => (
    StockApiUtil.fetchIntradayPrices(symbol).then(
        prices => dispatch(receiveIntradayPrices(prices))
    )
);

