import { RECEIVE_STOCK } from '../../actions/stock_actions';

const StocksReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_STOCK:
            nextState[action.stock.symbol] = action.stock;
            return nextState;
        default:
            return state;
    }
}

export default StocksReducer;