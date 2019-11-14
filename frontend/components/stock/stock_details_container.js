import { connect } from 'react-redux';
import { fetchStockNews } from '../../actions/news_actions';
import { fetchStock } from '../../actions/stock_actions';
import { fetchIntradayPrices, fetch1YPrices } from '../../actions/price_actions';
import StockDetails from './stock_details';

const mapStateToProps = (state, ownProps) => ({
    stock: state.entities.stocks[ownProps.match.params.symbol],
    news: state.entities.news,
    intradayPrices: state.entities.prices
});

const mapDispatchToProps = dispatch => ({
    fetchStock: symbol => dispatch(fetchStock(symbol)),
    fetchStockNews: (symbol, last) => dispatch(fetchStockNews(symbol, last)),
    fetchIntradayPrices: symbol => dispatch(fetchIntradayPrices(symbol)),
    fetch1YPrices: symbol => dispatch(fetch1YPrices(symbol))
});

export default connect(mapStateToProps, mapDispatchToProps)(StockDetails);