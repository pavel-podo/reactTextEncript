import {THEME} from '../types'
export const themeEdit  = (theme)=>{
    return{
        type:THEME,
        payload:theme
    }
} 

