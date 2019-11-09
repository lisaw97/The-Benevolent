import { RECEIVE_DEMO_USER, REMOVE_DEMO_USER } from "../../actions/ui_actions";

const _defaultDemoUser = {
    demoUser: false
}

const UIReducer = (state = _defaultDemoUser, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_DEMO_USER:
            return action.demoUser;
        case REMOVE_DEMO_USER:
            return _defaultDemoUser;
        default:
            return state;
    }
}

export default UIReducer;