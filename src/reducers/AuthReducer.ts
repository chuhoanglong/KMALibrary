import * as Types from '../constants/Type';

let initState = {
    isSignedIn: false,
}

export default function AuthReducer(state = initState, action) {
    switch (action.type) {
        case Types.SIGNED_IN:
            return {
                ...state,
                isSignedIn: true,
            }
        case Types.SIGN_OUT:
            return {
                ...state,
                isSignedIn: false,
            }
        default:
            return state;
    }
}