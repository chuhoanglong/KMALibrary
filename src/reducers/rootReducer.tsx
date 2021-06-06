import { combineReducers } from 'redux';
import initReducer from './initReducer';
import AuthReducer from './AuthReducer';
import bookShelfReducer from './bookShelfReducer';

const appReducer = combineReducers({
    init: initReducer,
    auth: AuthReducer,
    booksShelf: bookShelfReducer
});

export default appReducer;

