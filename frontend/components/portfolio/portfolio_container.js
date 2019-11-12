import { connect } from 'react-redux';

import { fetchStocks } from '../../actions/stock_actions';
import { fetchGeneralNews } from '../../actions/news_actions';
import { fetchIntradayPrices } from '../../actions/price_actions';

import Portfolio from './portfolio';

const mapStateToProps = state => ({
    stocks: state.entities.stocks,
    news: state.entities.news,
    transactions: state.entities.transactions,
    watchlist: state.entities.watchlist
});

const mapDispatchToProps = dispatch => ({
    fetchStocks: () => dispatch(fetchStocks()),
    fetchGeneralNews: () => dispatch(fetchGeneralNews()),
    fetchIntradayPrices: symbol => dispatch(fetchIntradayPrices(symbol))
})

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);