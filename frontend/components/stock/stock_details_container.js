import { connect } from 'react-redux';

import { fetchStock } from '../../actions/stock_actions';
import { fetchStocks } from '../../actions/stock_actions';
import { fetchTransactions } from '../../actions/transaction_actions';
import StockDetails from './stock_details';

const mapStateToProps = (state, ownProps) => ({
    stock: state.entities.stocks[ownProps.match.params.symbol]
});

const mapDispatchToProps = dispatch => ({
    fetchStock: symbol => dispatch(fetchStock(symbol)),
    fetchStocks: () => dispatch(fetchStocks()),
    fetchTransactions: () => dispatch(fetchTransactions())
});

export default connect(mapStateToProps, mapDispatchToProps)(StockDetails);