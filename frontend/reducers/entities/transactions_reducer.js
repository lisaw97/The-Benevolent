import { RECEIEVE_TRANSACTIONS, RECEIEVE_TRANSACTION } from '../../actions/transaction_actions';
import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';

const TransactionsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return action.currentUser.transaction;
        case RECEIEVE_TRANSACTION:
            nextState[action.transaction.id] = action.transaction;
            return nextState;
        default:
            return state;
    }
}

export default TransactionsReducer;