import { connect } from 'react-redux';
import TransactionForm from './transaction_form';
import { createTransaction } from '../../actions/transaction_actions';

const mapStateToProps = state => ({
    transactions: state.entities.transactions,
    currentUser: state.entities.users[0]
});

const mapDispatchToProps = dispatch => ({
    createTransaction: transaction => dispatch(createTransaction(transaction))
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);