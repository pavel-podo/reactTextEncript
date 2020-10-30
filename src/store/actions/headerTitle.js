import {HEADER_TITLE} from '../types'
export const headerTitleEdit  = (headerTitle)=>{
    return{
        type :HEADER_TITLE,
        payload:headerTitle
    }
} 
