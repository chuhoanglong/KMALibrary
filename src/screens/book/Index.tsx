import BookScreen from './BookScreen';
import { connect } from 'react-redux';
import {
    getBookShelfAction,
    updateBookShelfAction,
    addBookShelfAction,
    deleteBookShelfAction,
    searchBookShelfAction,
} from '../../actions/BookShelfAction';
interface TypeSearchProps {
    tenKe: string,
}

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
        deleteBookShelf: (payload: any) => dispatch(deleteBookShelfAction(payload)),
        searchBookShelf: (payload: TypeSearchProps) => dispatch(searchBookShelfAction(payload)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookScreen);