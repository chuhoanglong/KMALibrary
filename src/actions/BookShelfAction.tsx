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