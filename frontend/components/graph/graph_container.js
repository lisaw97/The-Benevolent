import { connect } from 'react-redux';
import Graph from './graph';
import { fetchIntradayPrices } from '../../actions/price_actions';

const mapStateToProps = state => ({
    prices: state.entities.prices
});

const mapDispatchToProps = dispatch => ({
   fetchIntradayPrices: symbol => dispatch(fetchIntradayPrices(symbol))
});

export default connect(mapStateToProps, mapDispatchToProps)(Graph);