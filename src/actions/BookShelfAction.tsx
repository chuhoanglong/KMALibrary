import * as Types from '../constants/Type';

export const getBookShelfAction = (payload: any) => ({
    type: Types.GET_BOOK_SHELF,
    payload: payload
});

export const getBookShelfSuccessAction = (data: any) => ({
    type: Types.GET_BOOK_SHELF_SUCCESS,
    data
});

export const getBookShelfFailureAction = (error: any) => ({
    type: Types.GET_BOOK_SHELF_FAILURE,
    error
});


// them ke sach
export const addBookShelfAction = (payload: any) => ({
    type: Types.ADD_BOOK_SHELF,
    payload: payload
});

export const addBookShelfSuccessAction = (data: any) => ({
    type: Types.ADD_BOOK_SHELF_SUCCESS,
    data
});

export const addBookShelfFailureAction = (error: any) => ({
    type: Types.ADD_BOOK_SHELF_FAILURE,
    error
});


// cap nhat sua ke sach
export const updateBookShelfAction = (payload: any) => ({
    type: Types.UPDATE_BOOK_SHELF,
    payload: payload
});

export const updateBookShelfSuccessAction = (data: any) => ({
    type: Types.UPDATE_BOOK_SHELF_SUCCESS,
    data
});

export const updateBookShelfFailureAction = (error: any) => ({
    type: Types.UPDATE_BOOK_SHELF_FAILURE,
    error
});


// xoa ke sach
export const deleteBookShelfAction = (payload: any) => ({
    type: Types.DELETE_BOOK_SHELF,
    payload: payload
});

export const deleteBookShelfSuccessAction = (data: any) => ({
    type: Types.DELETE_BOOK_SHELF_SUCCESS,
    data
});

export const deleteBookShelfFailureAction = (error: any) => ({
    type: Types.DELETE_BOOK_SHELF_FAILURE,
    error
});

interface TypeSearchProps {
    tenKe: string,
}

// tim kiem ke sach
export const searchBookShelfAction = (payload: TypeSearchProps) => ({
    type: Types.SEARCH_BOOK_SHELF,
    payload,
})

export const searchBookShelfSuccessAction = (data: any) => ({
    type: Types.SEARCH_BOOK_SHELF_SUCCESS,
    data,
});

export const searchBookShelfFaildAction = (error: any) => ({
    type: Types.SEARCH_BOOK_SHELF_FAILD,
    error,
});