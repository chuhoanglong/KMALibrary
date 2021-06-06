import * as Types from '../constants/Type';

let initState = {
    loading: true,
    booksShelf: []
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
                booksShelf:[]
            }

        default:
            return state;
    }
}