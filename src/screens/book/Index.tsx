import BookScreen from './BookScreen';
import { connect } from 'react-redux';
import {
    getBookShelfAction, updateBookShelfAction, addBookShelfAction, deleteBookShelfAction
} from '../../actions/BookShelfAction';

const mapStateToProps = (state: any) => {
    return {
        booksShelf: state.booksShelf.booksShelf,
        loading: state.booksShelf.loading
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getBooksShelf: (payload: any) => dispatch(getBookShelfAction(payload)),
        addBookShelf: (payload: any) => dispatch(addBookShelfAction(payload)),
        updateBookShelf: (payload: any) => dispatch(updateBookShelfAction(payload)),
        deleteBooksShelf: (payload: any) => dispatch(deleteBookShelfAction(payload)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookScreen);