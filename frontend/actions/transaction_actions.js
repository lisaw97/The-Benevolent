import * as TransactionApiUtil from '../util/transaction_api_util';

// export const RECEIVE_TRANSACTIONS = 'RECEIEVE_TRANSACTIONS';
export const RECEIVE_TRANSACTION = 'RECEIEVE_TRANSACTION';

// const receiveTransactions = transactions => ({
//     type: RECEIVE_TRANSACTIONS,
//     transactions
// });

const receiveTransaction = transaction => ({
    type: RECEIVE_TRANSACTION,
    transaction
});

// export const fetchTransactions = () => dispatch => (
//     TransactionApiUtil.fetchTransactions().then(
//         transactions => dispatch(receieveTransactions(transactions))
//     )
// );

// export const fetchTransaction = transaction => dispatch => (
//     TransactionApiUtil.fetchTransaction(transaction).then(
//         transaction => dispatch(receieveTransaction(transaction))
//     )
// );

export const createTransaction = transaction => dispatch => (
    TransactionApiUtil.createTransaction(transaction).then(
        transaction => dispatch(receiveTransaction(transaction))
    )
);
