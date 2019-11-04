import { combineReducers } from 'redux';
import UsersReducers from './users_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducers,
});

export default EntitiesReducer;
