import { RECEIVE_STOCKS, RECEIVE_STOCK } from '../../actions/stock_actions';
// import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';

const StocksReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        // case RECEIVE_CURRENT_USER:
        //     return action.currentUser.stock;
        case RECEIVE_STOCKS:
            if (action.stocks.hasOwnProperty('stock')) {
                nextState = action.stocks.stock;
            } else {
                nextState = action.stocks;
            }
            return nextState;
        case RECEIVE_STOCK:
            nextState[action.stock.symbol] = action.stock;
            return nextState;
        default:
            return state;
    }
}

export default StocksReducer;