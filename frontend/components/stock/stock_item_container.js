import { connect } from 'react-redux';
import { fetchIntradayPrices } from '../../actions/price_actions';
import StockItem from './stock_item';

const mapStateToProps = (state, ownProps) => ({
    prices: state.entities.stocks[ownProps.symbol].prices
});

const mapDispatchToProps = dispatch => ({
    fetchIntradayPrices: symbol => dispatch(fetchIntradayPrices(symbol))
});

export default connect(mapStateToProps, mapDispatchToProps)(StockItem);