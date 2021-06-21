import * as Types from '../constants/Type';

let initState = {
    loading: true,
    booksShelf: [],
    message: '',
}

export default function bookShelfReducer(state = initState, action: any) {
    switch (action.type) {
        case Types.GET_BOOK_SHELF:
            return {
                ...state,
                loading: true,
            }
        case Types.GET_BOOK_SHELF_SUCCESS:
            return {
                ...state,
                loading: false,
                booksShelf: action.data,
            }
        case Types.GET_BOOK_SHELF_FAILURE:
            return {
                ...state,
                loading: false,
                booksShelf: []
            }
        case Types.ADD_BOOK_SHELF_SUCCESS:
            return {
                ...state,
                booksShelf: action.data
            }
        case Types.UPDATE_BOOK_SHELF_SUCCESS:
            return {
                ...state,
                booksShelf: action.data
            }
        case Types.DELETE_BOOK_SHELF_SUCCESS:
            return {
                ...state,
                booksShelf: action.data.data
            }
        case Types.SEARCH_BOOK_SHELF:
            return {
                ...state,
                loading: true,
            }
        case Types.SEARCH_BOOK_SHELF_SUCCESS:
            return {
                ...state,
                loading: false,
                booksShelf: action.data
            }
        case Types.SEARCH_BOOK_SHELF_FAILD:
            return {
                ...state,
                loading: false,
                message: action.message,
            }
        default:
            return state;
    }
}