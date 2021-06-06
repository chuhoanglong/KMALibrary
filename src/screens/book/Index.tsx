import BookScreen from './BookScreen';
import { connect } from 'react-redux';
import { getBookShelfAction } from '../../actions/BookShelfAction';

const mapStateToProps = (state: any) => {
    return {
        booksShelf: state.booksShelf.booksShelf
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getBooksShelf: (payload: any) => dispatch(getBookShelfAction(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookScreen);