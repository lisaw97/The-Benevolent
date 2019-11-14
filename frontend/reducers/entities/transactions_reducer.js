import { RECEIVE_TRANSACTIONS, RECEIVE_TRANSACTION } from '../../actions/transaction_actions';
import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_STOCKS } from '../../actions/stock_actions';

const TransactionsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_STOCKS:
            if (action.stocks.hasOwnProperty('transaction')) {
                nextState = action.stocks.transaction;
            } else {
                nextState = action.stocks;
            }
            return nextState;
        case RECEIVE_TRANSACTION:
            return action.transaction
        default:
            return state;
    }
}

export default TransactionsReducer;