import { RECEIVE_STOCKS } from '../../actions/stock_actions';
const WatchlistItemsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_STOCKS:
            if (action.stocks.hasOwnProperty('watchlist')) {
                nextState = action.stocks.watchlist;
            } else {
                nextState = {};
            }
            return nextState;
        default:
            return state;
    }
}

export default WatchlistItemsReducer;