import {MESSAGE_LANG} from '../types'
export const messageLangEdit  = (lang)=>{
    return{
        type:MESSAGE_LANG,
        payload:lang
    }
} 

