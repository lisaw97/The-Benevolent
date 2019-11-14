import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import StocksReducer from './stocks_reducer';
import TransactionsReducer from './transactions_reducer';
import NewsReducer from './news_reducer';
import PricesReducer from './prices_reducer';
import WatchlistItemsReducer from './watchlist_items_reducer';
import SnapshotReducer from './portfolio_snapshots_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    stocks: StocksReducer,
    transactions: TransactionsReducer,
    news: NewsReducer,
    prices: PricesReducer,
    watchlist: WatchlistItemsReducer,
    portfolio: SnapshotReducer
});

export default EntitiesReducer;
