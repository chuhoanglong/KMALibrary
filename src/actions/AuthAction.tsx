import * as Types from '../constants/Type';

export const SignInAction = payload => ({
    type: Types.SIGNED_IN,
    payload
});

export const SignOutAction = payload => ({
    type: Types.SIGN_OUT,
    payload
});