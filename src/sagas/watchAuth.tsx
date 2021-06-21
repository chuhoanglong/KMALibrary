import { put, takeLatest } from 'redux-saga/effects';
import * as Types from '../constants/Type';
import * as authService from '../services/authService';
import {
    signInSuccessAction,
    signInFailureAction,
} from '../actions/AuthAction';

function* signIn(action: any): any {
    try {
        let response = yield authService.signIn(action.payload);
        if (response && response.accesstoken)
            yield put(signInSuccessAction(response));
        else
            yield put(signInFailureAction({ message: 'Errors' }));
    } catch (error) {
        yield put(signInFailureAction(error));
    }
}

function* signOut(action: any): any {
    try {
        let response = yield authService.signOut(action.payload);
        console.log('responseresponse', response);
    } catch (error) {
        console.log('errorerror', error);
    }
}

export function* watchAuth() {
    yield takeLatest(Types.SIGN_IN, signIn);
    yield takeLatest(Types.SIGN_OUT, signOut);
}
