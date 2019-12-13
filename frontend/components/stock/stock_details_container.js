import { connect } from 'react-redux';
import { fetchStockNews } from '../../actions/news_actions';
import { fetchStock, fetchStocks } from '../../actions/stock_actions';
import { fetchIntradayPrices, fetch1YPrices, fetch5YPrices } from '../../actions/price_actions';
import StockDetails from './stock_details';

const mapStateToProps = (state, ownProps) => ({
    stock: state.entities.stocks.currentStock,
    news: state.entities.news,
    prices: state.entities.prices
});

const mapDispatchToProps = dispatch => ({
    fetchStocks: () => dispatch(fetchStocks()),
    fetchStock: symbol => dispatch(fetchStock(symbol)),
    fetchStockNews: (symbol, last) => dispatch(fetchStockNews(symbol, last)),
    fetchIntradayPrices: symbol => dispatch(fetchIntradayPrices(symbol)),
    fetch1YPrices: symbol => dispatch(fetch1YPrices(symbol)),
    fetch5YPrices: symbol => dispatch(fetch5YPrices(symbol))
});

export default connect(mapStateToProps, mapDispatchToProps)(StockDetails);