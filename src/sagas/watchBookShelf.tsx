import { put, takeLatest } from 'redux-saga/effects';
import * as Types from '../constants/Type';
import * as bookShelfService from '../services/bookShelfService';
import {
    addBookShelfSuccessAction, addBookShelfFailureAction,
    updateBookShelfSuccessAction, updateBookShelfFailureAction,
    deleteBookShelfSuccessAction, deleteBookShelfFailureAction,
    getBookShelfSuccessAction, getBookShelfFailureAction,
    searchBookShelfSuccessAction, searchBookShelfFaildAction,
} from '../actions/BookShelfAction';


function* getBookShelf(action: any): any {
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

function* addBookShelf(action: any): any {
    try {
        let response = yield bookShelfService.addBookshelf(action.payload);
        if (response && response.status == 200)
            yield put(addBookShelfSuccessAction(response.data));
        else
            yield put(addBookShelfFailureAction({ message: 'Error' }));
    } catch (error) {
        yield put(addBookShelfFailureAction(error));
    }
}

function* updateBookShelf(action: any): any {
    try {
        let response = yield bookShelfService.updateBookShelf(action.payload);
        if (response && response.status == 200) {
            yield put(updateBookShelfSuccessAction(response.data));
        } else {
            yield put(updateBookShelfFailureAction({ message: 'Error' }));
        }
    } catch (error) {
        yield put(updateBookShelfFailureAction(error));
    }
}


function* deleteBookShelf(action: any): any {
    try {
        let response = yield bookShelfService.deleteBookShelf(action.payload);
        if (response && response.status == 200) {
            yield put(deleteBookShelfSuccessAction(response));
        } else {
            yield put(deleteBookShelfFailureAction({ message: 'Error' }));
        }
    } catch (error) {
        yield put(deleteBookShelfFailureAction(error));
    }
}

function* searchBookShelf(action: any): any {
    try {
        let response = yield bookShelfService.searchBookShelf(action.payload);
        if (response && response.status == 200) {
            yield put(searchBookShelfSuccessAction(response.data));
        } else {
            yield put(searchBookShelfFaildAction({ message: response.message }));
        }
    } catch (error) {
        yield put(searchBookShelfFaildAction({ message: error }));
    }
}

export function* watchBookShelf() {
    yield takeLatest(Types.ADD_BOOK_SHELF, addBookShelf);
    yield takeLatest(Types.GET_BOOK_SHELF, getBookShelf);
    yield takeLatest(Types.UPDATE_BOOK_SHELF, updateBookShelf);
    yield takeLatest(Types.DELETE_BOOK_SHELF, deleteBookShelf);
    yield takeLatest(Types.SEARCH_BOOK_SHELF, searchBookShelf);
}
