import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as Types from '../constants/Type';
import * as bookService from '../services/bookService';
import { signInSuccessAction, signInFailureAction } from '../actions/AuthAction';

function* getBooks(action: any) {
    try {
        let response = yield bookService.getBooks(action.payload);
        yield put(signInSuccessAction(response));
    } catch (error) {
        yield put(signInFailureAction(error));
    }
}


function* addBook(action: any) {
    try {
        let response = yield bookService.addBook(action.payload.token, action.payload);
        yield put(signInSuccessAction(response));
    } catch (error) {
        yield put(signInFailureAction(error));
    }
}

function* updateBook(action: any) {
    try {
        let response = yield bookService.updateBook(action.payload.token, action.payload);
        yield put(signInSuccessAction(response));
    } catch (error) {
        yield put(signInFailureAction(error));
    }
}

function* deleteBook(action: any) {
    try {
        let response = yield bookService.deleteBook(action.payload.token, action.payload);
        yield put(signInSuccessAction(response));
    } catch (error) {
        yield put(signInFailureAction(error));
    }
}

function* searchBook(action: any) {
    try {
        let response = yield bookService.searchBook(action.payload.token, action.payload);
        yield put(signInSuccessAction(response));
    } catch (error) {
        yield put(signInFailureAction(error));
    }
}


export function* watchBook() {
    yield takeLatest(Types.GET_BOOK, getBooks);
    yield takeLatest(Types.ADD_BOOK, addBook);
    yield takeLatest(Types.UPDATE_BOOK, updateBook);
    yield takeLatest(Types.DELETE_BOOK, deleteBook);
    yield takeLatest(Types.SEARCH_BOOK, searchBook);
}
