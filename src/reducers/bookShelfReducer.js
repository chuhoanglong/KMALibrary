import * as Types from '../constants/Type';

let initState = {
    loading: true,
    booksShelf: []
}

export default function bookShelfReducer(state = initState, action) {
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
        default:
            return state;
    }
}

const updateBookShelf = (booksShelf, postUpdate) => {
    let temData = booksShelf;
    if (booksShelf.length > 0) {
        temData = booksShelf.map((item) => {
            if (item._id == postUpdate._id) {
                return {
                    ...item,
                    ...postUpdate
                }
            } else {
                return {
                    ...item
                }
            }
        });
    }
    return temData;
}