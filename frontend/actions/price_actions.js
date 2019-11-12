import * as StockApiUtil from '../util/stock_api_util';

export const RECEIVE_INTRADAY_PRICES = 'RECEIVE_INTRADAY_PRICES';

const receiveIntradayPrices = (symbol, prices) => {
    // debugger
    return ({
        type: RECEIVE_INTRADAY_PRICES,
        symbol,
        prices
    })
};

export const fetchIntradayPrices = symbol => dispatch => {
    // debugger
    return StockApiUtil.fetchIntradayPrices(symbol).then(
        prices => dispatch(receiveIntradayPrices(symbol, prices))
    )
};

