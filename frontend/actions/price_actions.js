import * as StockApiUtil from '../util/stock_api_util';

export const RECEIVE_INTRADAY_PRICES = 'RECEIVE_INTRADAY_PRICES';
export const RECEIVE_1Y_PRICES = 'RECEIVE_1Y_PRICES';
export const RECEIVE_5Y_PRICES = 'RECEIVE_5Y_PRICES';

const receiveIntradayPrices = (symbol, prices) => {
    return ({
        type: RECEIVE_INTRADAY_PRICES,
        symbol,
        prices
    })
};

const receive1YPrices = (symbol, prices) => {
    // debugger
    return ({
        type: RECEIVE_1Y_PRICES,
        symbol,
        prices
    })
}

const receive5YPrices = (symbol, prices) => {
    return ({
        type: RECEIVE_5Y_PRICES,
        symbol,
        prices
    })
}

export const fetchIntradayPrices = symbol => dispatch => {
    return StockApiUtil.fetchIntradayPrices(symbol).then(
        prices => dispatch(receiveIntradayPrices(symbol, prices))
    )
};

export const fetch1YPrices = symbol => dispatch => {
    // debugger
    return StockApiUtil.fetch1YPrices(symbol).then(
        prices => dispatch(receive1YPrices(symbol, prices))
    )
};

export const fetch5YPrices = symbol => dispatch => {
    return StockApiUtil.fetch5YPrices(symbol).then(
        prices => dispatch(receive5YPrices(symbol, prices))
    )
};

