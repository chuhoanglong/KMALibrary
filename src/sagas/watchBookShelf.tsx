import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import * as Types from '../constants/Type';
import * as bookShelfService from '../services/bookShelfService';
import {
    addBookShelfSuccessAction, addBookShelfFailureAction,
    updateBookShelfSuccessAction, updateBookShelfFailureAction,
    deleteBookShelfSuccessAction, deleteBookShelfFailureAction, getBookShelfSuccessAction, getBookShelfFailureAction
} from '../actions/BookShelfAction';


function* getBookShelf(action: any) {
    try {
        let response = yield bookShelfService.getBookShelf(action.payload);
        if (response && response.status == 200) {
            yield put(getBookShelfSuccessAction(response.data));
        } else {
            yield put(getBookShelfFailureAction({ message: 'Error' }));
        }
    } catch (error) {
        yield put(getBookShelfFailureAction(error));
    }
}

function* addBookShelf(action: any) {
    try {
        let response = yield bookShelfService.addBookshelf(action.payload);
        yield put(addBookShelfSuccessAction(response));
    } catch (error) {
        yield put(addBookShelfFailureAction(error));
    }
}

function* updateBookShelf(action: any) {
    try {
        let response = yield bookShelfService.addBookshelf(action.payload);
        yield put(updateBookShelfSuccessAction(response));
    } catch (error) {
        yield put(updateBookShelfFailureAction(error));
    }
}


function* deleteBookShelf(action: any) {
    try {
        let response = yield bookShelfService.addBookshelf(action.payload);
        yield put(deleteBookShelfSuccessAction(response));
    } catch (error) {
        yield put(deleteBookShelfFailureAction(error));
    }
}

export function* watchBookShelf() {
    yield takeLatest(Types.ADD_BOOK_SHELF, addBookShelf);
    yield takeLatest(Types.GET_BOOK_SHELF, getBookShelf);
    yield takeLatest(Types.UPDATE_BOOK_SHELF, updateBookShelf);
    yield takeLatest(Types.DELETE_BOOK_SHELF, deleteBookShelf);
}
