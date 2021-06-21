import * as Types from '../constants/Type';

let initState = {
    index: 0
}

export default function initReducer(state = initState, action: any) {
    switch (action.type) {
        default:
            return state;
    }
}