import {THEME} from "../types";
import{ themes} from "../../data/THEME"
const initialState = {
    theme:themes[1],
};
export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case THEME: return { ...state, theme: action.payload };
        default: return state
    }
    return state;
};
