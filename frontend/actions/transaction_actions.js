import * as TransactionApiUtil from '../util/transaction_api_util';

export const RECEIEVE_TRANSACTIONS = 'RECEIEVE_TRANSACTIONS';
export const RECEIEVE_TRANSACTION = 'RECEIEVE_TRANSACTION';

const receieveTransactions = transactions => ({
    type: RECEIEVE_TRANSACTIONS,
    transactions
});

const receieveTransaction = transaction => ({
    type: RECEIEVE_TRANSACTION,
    transaction
});

export const fetchTransactions = () => dispatch => (
    TransactionApiUtil.fetchTransactions().then(
        transactions => dispatch(receieveTransactions(transactions))
    )
);

export const fetchTransaction = transaction => dispatch => (
    TransactionApiUtil.fetchTransaction(transaction).then(
        transaction => dispatch(receieveTransaction(transaction))
    )
);

export const createTransaction = transaction => dispatch => (
    TransactionApiUtil.createTransaction(transaction).then(
        transaction => dispatch(receiveTransaction(transaction))
    )
);