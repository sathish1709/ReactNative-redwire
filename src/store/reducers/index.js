import { combineReducers } from 'redux';
import auth from './auth_reducers';

const rootReducers = combineReducers({
    auth
})

export default rootReducers;