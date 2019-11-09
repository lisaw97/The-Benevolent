export const RECEIVE_DEMO_USER = 'RECEIVE_DEMO_USER';
export const REMOVE_DEMO_USER = 'REMOVE_DEMO_USER';

export const demoStateOn = demoUser => {
    return ({
        type: RECEIVE_DEMO_USER,
        demoUser
    })
}

export const demoStateOff = demoUser => ({
    type: REMOVE_DEMO_USER,
    demoUser
});
