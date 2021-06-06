import * as Types from '../constants/Type';

export const addBookAction = (payload: any) => ({
    type: Types.ADD_BOOK,
    payload: payload
});

export const addBookSuccessAction = (data: any) => ({
    type: Types.ADD_BOOK_SUCCESS,
    data
});

export const addBookFailureAction = (error: any) => ({
    type: Types.ADD_BOOK_FAILURE,
    error
});


export const updateBookAction = (payload: any) => ({
    type: Types.UPDATE_BOOK,
    payload: payload
});

export const updateBookSuccessAction = (data: any) => ({
    type: Types.UPDATE_BOOK_SUCCESS,
    data
});

export const updateBookFailureAction = (error: any) => ({
    type: Types.UPDATE_BOOK_FAILURE,
    error
});


export const deleteBookAction = (payload: any) => ({
    type: Types.DELETE_BOOK,
    payload: payload
});

export const deleteBookSuccessAction = (data: any) => ({
    type: Types.DELETE_BOOK_SUCCESS,
    data
});

export const deleteBookFailureAction = (error: any) => ({
    type: Types.DELETE_BOOK_FAILURE,
    error
});


export const searchBookAction = (payload: any) => ({
    type: Types.SEARCH_BOOK,
    payload: payload
});

export const searchBookSuccessAction = (data: any) => ({
    type: Types.SEARCH_BOOK_SUCCESS,
    data
});

export const searchBookFailureAction = (error: any) => ({
    type: Types.SEARCH_BOOK_FAILURE,
    error
});