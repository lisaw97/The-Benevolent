import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../../actions/session_actions';

const _nullUser = {
    id: null
}

const UsersReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:

            // nextState[action.currentUser.id] = action.currentUser;
            return action.currentUser.user;
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        default:
            return state;
    }
}

export default UsersReducer;