import * as Types from '../constants/Type';

export const signInAction = (payload: any) => ({
    type: Types.SIGN_IN,
    payload: payload
});

export const signInSuccessAction = (data: any) => ({
    type: Types.SIGN_IN_SUCCESS,
    data
});

export const signInFailureAction = (error: any) => ({
    type: Types.SIGN_IN_FAILURE,
    error
});

