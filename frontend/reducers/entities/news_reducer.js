import { RECEIVE_STOCK_NEWS, RECEIVE_GENERAL_NEWS } from '../../actions/news_actions';

const NewsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_GENERAL_NEWS:
            return action.news.articles;
        case RECEIVE_STOCK_NEWS:
            return action.news;
        default:
            return state;
    }
}

export default NewsReducer;