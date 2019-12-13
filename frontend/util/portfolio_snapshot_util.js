export const fetchSnapshots = () => (
    $.ajax({
        url: '/api/portfolio_snapshots',
        method: 'GET'
    })
);

export const fetchSnapshot = id => (
    $.ajax({
        url: `/api/portfolio_snapshots/${id}`,
        method: 'GET'
    })
);
