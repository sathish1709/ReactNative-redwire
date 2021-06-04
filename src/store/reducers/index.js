import { combineReducers } from 'redux';
import auth from './auth_reducers';
import articles from './article_reducer';

const rootReducers = combineReducers({
    auth, 
    articles
})

export default rootReducers;