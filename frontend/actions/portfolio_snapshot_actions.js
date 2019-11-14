import * as SnapshotApiUtil from '../util/portfolio_snapshot_util';

export const RECEIVE_SNAPSHOTS = 'RECEIVE_SNAPSHOTS';
export const RECEIVE_SNAPSHOT = 'RECEIVE_SNAPSHOT';

const receiveSnapshots = snapshots => ({
    type: RECEIVE_SNAPSHOTS,
    snapshots
});

const receiveSnapshot = snapshot => ({
    type: RECEIVE_SNAPSHOT,
    snapshot
});

export const fetchSnapshots = () => dispatch => (
    SnapshotApiUtil.fetchSnapshots().then(
        snapshots => dispatch(receiveSnapshots(snapshots))
    )
);

export const fetchSnapshot = id => dispatch => (
    SnapshotApiUtil.fetchSnapshot(id).then(
        snapshot => dispatch(receiveSnapshot(snapshot))
    )
);