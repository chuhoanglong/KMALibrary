import { fork, all } from 'redux-saga/effects';
import { watchAuth } from './watchAuth';
import { watchBook } from './watchBook';
import { watchBookShelf } from './watchBookShelf';

export default function* rootSaga() {
    yield all([
        fork(watchAuth),
        fork(watchBook),
        fork(watchBookShelf),
    ])

}
