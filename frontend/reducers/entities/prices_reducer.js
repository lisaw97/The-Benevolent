import { RECEIVE_INTRADAY_PRICES, RECEIVE_1Y_PRICES, RECEIVE_5Y_PRICES } from '../../actions/price_actions';

const PricesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_INTRADAY_PRICES:
            nextState.intraday = action.prices;
            // debugger
            return nextState;
        case RECEIVE_1Y_PRICES:
            // debugger
            nextState.year = action.prices;
            return nextState;
        case RECEIVE_5Y_PRICES:
            nextState.year = action.prices;
            return nextState;
        default:
            return state;
    }
}

export default PricesReducer;