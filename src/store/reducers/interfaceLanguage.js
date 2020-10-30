import {
    LANGUAGE_TITLE,INTERFACE_LANGUAGE
} from "../types";
const initialState = {
    interfaceLanguage: '',
    languageTitle: '',
    
};
export const interfaceLanguageReducer = (state = initialState, action) => {
    switch (action.type) {
        case INTERFACE_LANGUAGE: return { ...state, interfaceLanguage: action.payload };
        case LANGUAGE_TITLE: return { ...state, languageTitle: action.payload }
        default: return state
    }
    return state;
};
