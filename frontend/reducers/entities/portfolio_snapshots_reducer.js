import { RECEIVE_SNAPSHOTS, RECEIVE_SNAPSHOT } from '../../actions/portfolio_snapshot_actions';

const SnapshotReducer = (state = {}, action) => {
    
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SNAPSHOTS:
            return action.snapshots;
        case RECEIVE_SNAPSHOT:
            return action.snapshot;
        default:
            return state;
    }
}

export default SnapshotReducer;