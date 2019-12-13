import { RECEIVE_STOCKS, RECEIVE_STOCK } from '../../actions/stock_actions';
import { RECEIVE_INTRADAY_PRICES} from '../../actions/price_actions';

const StocksReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_INTRADAY_PRICES:
            // debugger
            if (nextState.currentStock) {
                nextState.currentStock.prices = action.prices;
            } else {
                nextState[action.symbol].prices = action.prices;
            }
            // debugger
            return nextState;
        case RECEIVE_STOCKS:
            if (action.stocks.hasOwnProperty('stock')) {
                nextState = action.stocks.stock;
            } else {
                nextState = action.stocks;
            }
            nextState["allStocks"] = action.stocks.allStocks;
            return nextState;
        case RECEIVE_STOCK:
            // nextState[action.stock.symbol] = action.stock;
            nextState["currentStock"] = action.stock;
            // debugger
            return nextState;
        default:
            return state;
    }
}

export default StocksReducer;