import { RECEIVE_STOCKS, RECEIVE_STOCK } from '../../actions/stock_actions';
import { RECEIVE_INTRADAY_PRICES} from '../../actions/price_actions';

const StocksReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_INTRADAY_PRICES:
            if (nextState.currentStock) {
                nextState.currentStock.prices = action.prices;
            } else {
                nextState[action.symbol].prices = action.prices;
            }
            return nextState;
        case RECEIVE_STOCKS:
            let current = nextState.currentStock;
            if (action.stocks.hasOwnProperty('stock')) {
                nextState = action.stocks.stock;
            } 
            nextState["currentStock"] = current;
            nextState["allStocks"] = action.stocks.allStocks;
            return nextState;
        case RECEIVE_STOCK:
            nextState["currentStock"] = action.stock;
            return nextState;
        default:
            return state;
    }
}

export default StocksReducer;