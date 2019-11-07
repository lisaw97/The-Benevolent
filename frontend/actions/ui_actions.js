export const RECEIVE_DEMO_USER = 'RECEIVE_DEMO_USER';
export const REMOVE_DEMO_USER = 'REMOVE_DEMO_USER';

const receiveDemoUser = demoUser => {
    debugger
    return ({
        type: RECEIVE_DEMO_USER,
        demoUser
    })
}

const removeDemoUser = boolean => ({
    type: RECEIVE_DEMO_USER,
    boolean
});

export const loginDemoUser = demoUser => {
    debugger
    return (
        dispatch(receiveDemoUser(demoUser))
    )
}
export const logoutDemoUser = (boolean) => dispatch => (
    boolean => dispatch(removeDemoUser(boolean))
);

