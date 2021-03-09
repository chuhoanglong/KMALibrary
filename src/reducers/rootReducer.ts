import { combineReducers } from 'redux';
import initReducer from './initReducer';
import AuthReducer from './AuthReducer';
const appReducer = combineReducers({
    init: initReducer,
    auth: AuthReducer,
});

export default appReducer;

