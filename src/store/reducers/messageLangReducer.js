import {MESSAGE_LANG} from "../types";
import{ lang} from "../../lang/lang"
const initialState = {
    lang:lang[0],
};
export const messageLangReducer = (state = initialState, action) => {
    switch (action.type) {
        case MESSAGE_LANG: return { ...state, lang: action.payload };
        default: return state
    }
    return state;
};
