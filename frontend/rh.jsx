import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { signup, login, logout } from './actions/session_actions';
import { fetchStock, fetchStocks } from './actions/stock_actions';
import { fetchIntradayPrices } from './actions/price_actions';
import { createTransaction } from './actions/transaction_actions';
import { fetchSnapshots } from './actions/portfolio_snapshot_actions';
import { fetchGeneralNews, fetchStockNews} from './util/news_api_util';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.login = login;
    window.signup = signup;
    window.logout = logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchStock = fetchStock;
    window.fetchStocks = fetchStocks;
    window.fetchIntradayPrices = fetchIntradayPrices;
    window.createTransaction = createTransaction;
    window.fetchSnapshots = fetchSnapshots;
    window.fetchGeneralNews = fetchGeneralNews;
    ReactDOM.render(<Root store={store} />, root);
});