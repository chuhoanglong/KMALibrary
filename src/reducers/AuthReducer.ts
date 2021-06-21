import * as Types from '../constants/Type';
import { saveRefreshToken, saveToken } from '../utils/Helper';

let initState = {
    loading: true,
    isSigning: false,
    isSignedIn: false,
    error: null
}

export default function AuthReducer(state = initState, action: any) {
    switch (action.type) {
        case Types.SIGN_IN:
            return {
                ...state,
                isSigning: true,
                isSignedIn: false,
            }
        case Types.SIGN_IN_SUCCESS:
            saveToken(action.data.accesstoken);
            saveRefreshToken(action.data.refreshToken);
            return {
                ...state,
                isSigning: false,
                isSignedIn: true
            }
        case Types.SIGN_IN_FAILURE:
            return {
                ...state,
                isSigning: false,
                isSignedIn: false,
                error: action.error.message
            }

        case Types.SIGN_OUT:
            saveToken('');
            saveRefreshToken('');
            return {
                ...state,
                isSignedIn: false
            }
        case Types.RESTORE_TOKEN:
            return {
                ...state,
                isSignedIn: action.isSignedIn,
                loading: false
            }
        default:
            return state;
    }
}