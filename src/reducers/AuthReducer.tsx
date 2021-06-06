import * as Types from '../constants/Type';

let initState = {
    loading: false,
    isSignedIn: false,
}

export default function AuthReducer(state = initState, action: any) {
    switch (action.type) {
        case Types.SIGN_IN:
            return {
                ...state,
                loading: true,
            }
        case Types.SIGN_IN_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case Types.SIGN_IN_FAILURE:
            return {
                ...state,
                loading: false,
            }
        default:
            return state;
    }
}