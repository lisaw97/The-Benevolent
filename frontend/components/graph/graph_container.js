import { connect } from 'react-redux';
import Graph from './graph';
import { fetchIntradayPrices } from '../../actions/price_actions';
const mapStateToProps = state => ({
    prices: this.state.entities.prices
});

const mapDispatchToProps = dispatch => ({
   fetchIntradayPrices: prices => dispatch(fetchIntradayPrices(prices))
});

export default connect(mapStateToProps, mapDispatchToProps)(Graph);