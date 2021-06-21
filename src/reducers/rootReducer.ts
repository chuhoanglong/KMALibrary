import { combineReducers } from 'redux';
import initReducer from './initReducer';
import AuthReducer from './AuthReducer';
import bookShelfReducer from './bookShelfReducer';

const RootReducer = combineReducers({
    init: initReducer,
    auth: AuthReducer,
    booksShelf: bookShelfReducer
});

export default RootReducer;
export type RootState = ReturnType<typeof RootReducer>;