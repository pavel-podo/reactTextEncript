import {
    HEADER_TITLE
} from "../types";
const initialState = {
    headerTitle: '',
};
export const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case HEADER_TITLE: return { ...state, headerTitle: action.payload }
        default: return state
    }
    return state;
};
