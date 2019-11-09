import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import StocksReducer from './stocks_reducer';
import TransactionsReducer from './transactions_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    stocks: StocksReducer,
    transactions: TransactionsReducer
});

export default EntitiesReducer;
