import { RECEIVE_PRICES } from '../../actions/price_actions';

const PricesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_PRICES:
            return action.prices;
        default:
            return state;
    }
}

export default PricesReducer;