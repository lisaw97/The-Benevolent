import { RECEIVE_NEWS } from '../../actions/news_actions';

const NewsReducer = (state = [], action) => {
    Object.freeze(state);
    let nextState = Object.assign([], state);
    switch (action.type) {
        case RECEIVE_NEWS:
            return action.news;
        default:
            return state;
    }
}

export default NewsReducer;