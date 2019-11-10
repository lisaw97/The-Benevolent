export const fetchTransactions = () => (
    $.ajax({
        url: '/api/transactions',
        method: 'GET'
    })
);

export const fetchTransaction = transaction => (
    $.ajax({
        url: `/api/transactions/${transaction.id}`,
        method: 'GET'
    })
);

export const createTransaction = transaction => (
    $.ajax({
        url: `/api/transactions`,
        method: 'POST',
        data: { transaction }
    })
)
