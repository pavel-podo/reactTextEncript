import {LANGUAGE_TITLE,INTERFACE_LANGUAGE} from '../types'
export const interfaceLanguageEdit  = (interfaceLanguage)=>{
    return{
        type :INTERFACE_LANGUAGE,
        payload:interfaceLanguage
    }
} 
export const languageTitleEdit  = (languageTitle)=>{
    return{
        type :LANGUAGE_TITLE,
        payload:languageTitle,
    }
} 

