import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import StocksReducer from './stocks_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    stocks: StocksReducer
});

export default EntitiesReducer;
