import { RECEIVE_SNAPSHOTS, RECEIVE_SNAPSHOT } from '../../actions/portfolio_snapshot_actions';

// const _newUser = {
//     '2019-11-14': {
//         id: 1,
//         // user_id: current_user.id,
//         date: '2019-11-14',
//         balance: 0.00
//     }
// }
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