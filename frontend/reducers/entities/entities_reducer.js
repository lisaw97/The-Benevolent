import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import StocksReducer from './stocks_reducer';
import TransactionsReducer from './transactions_reducer';
import NewsReducer from './news_reducer';
import PricesReducer from './prices_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    stocks: StocksReducer,
    transactions: TransactionsReducer,
    news: NewsReducer,
    prices: PricesReducer
});

export default EntitiesReducer;
