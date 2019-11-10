import { connect } from 'react-redux';

import { fetchStocks, fetchStock } from '../../actions/stock_actions';
import { fetchTransactions } from '../../actions/transaction_actions';
import { fetchNews } from '../../actions/news_actions';
import Portfolio from './portfolio';

const mapStateToProps = state => ({
    stocks: state.entities.stocks,
    news: state.entities.news,
    transactions: state.entities.transactions
});

const mapDispatchToProps = dispatch => ({
    fetchStocks: () => dispatch(fetchStocks()),
    // fetchStock: symbol => dispatch(fetchStock(symbol)),
    fetchNews: (symbol, last) => dispatch(fetchNews(symbol, last)),
    // fetchTransactions: () => dispatch(fetchTransactions())
})

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);