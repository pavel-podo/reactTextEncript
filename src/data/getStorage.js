import React from "react-native";
import { AsyncStorage } from "react-native";



import { interfaceLanguageEdit, languageTitleEdit } from "../store/actions/interfaceLanguage"
import { useDispatch, useSelector } from "react-redux";
///import { useDispatch, useSelector } from "react-redux";



import { languages, langInt } from "../data/languages"
export  async function loadApplication (
    dispatch
    
){
    let 
    langIndex = 'langTitleIndex', 
    langKey = 'langIndex';
     await getInierfaceLang(dispatch,langIndex,langKey)
}
export const getInierfaceLang = async (key, index, dispatch) => {
    try {
        const titleIndex = await AsyncStorage.getItem(index);
        if (titleIndex !== null) {
            // We have data!!
            console.log('title index - ', titleIndex);
            console.log('title key - ', languages[Number(index)]);
            console.log('title key - ', languages[1]);
            console.log('title key - ', index);
            const langKey = await AsyncStorage.getItem(key);
            if (langKey !== null) {
                console.log('lang key - ', langKey);
                console.log('lang index - ', langInt[langKey]);
                dispatch(interfaceLanguageEdit(langInt[langKey]))
                dispatch(languageTitleEdit(languages[Number(titleIndex)]))

            }



        } else {
            console.log('do not have')
            dispatch(interfaceLanguageEdit(langInt['en']))
            dispatch(languageTitleEdit(languages[1]))
        }
    } catch (error) {
        // Error retrieving data
        console.log(error)
    }
}