import React from "react";
import { StyleSheet, View, Text, Picker } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { interfaceLanguageEdit, languageTitleEdit } from "../store/actions/interfaceLanguage";
import { languages, langInt } from "../data/languages";
import{setStorageValue} from "../data/addStorage"

export const SettingLangPicker = () => {
  const curentTheme = useSelector((state) => state.themeReducer.theme);
  const dispatch = useDispatch();
  const curentLangTitle = useSelector((state) => state.interfaceLanguageReducer.languageTitle)
  const currentIntLang = useSelector((state) => state.interfaceLanguageReducer.interfaceLanguage);
 

  const changeLang = (index) => {
    
    dispatch(languageTitleEdit(languages[index]))
    let key = languages[index].key;   
    dispatch(interfaceLanguageEdit(langInt[key]))
    setStorageValue('langKey',key)
    setStorageValue('langTitleIndex',String(index))
  }


  const styles = StyleSheet.create({
    settingItem: {
      alignItems: 'center',
      borderColor: curentTheme.second_color,
      borderBottomWidth: 1,
      width: '100%',
      paddingBottom: 7,
      paddingTop: 7,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    settingWrapper: {
      width: '100%',
    },
    settingTitle: {
      fontSize: 16,
      marginLeft: 20,
      color:curentTheme.second_font_color,
    },
    dropBox: {
      top: 20,
      right: 0,
      position: 'absolute',
      width: 200,
      height: 400,
      backgroundColor: 'red',
      zIndex: 0,
    },
  });
  return (

        <View style={styles.settingItem}>
          <View>
            <Text style={styles.settingTitle}>{currentIntLang.applicationLanguage}</Text>
          </View>
          <View>
            <Picker
              selectedValue={curentLangTitle.key}
              style={{ height: 50, width: 150,color:curentTheme.second_font_color }}
              onValueChange={(itemValue, itemIndex) => changeLang(itemIndex)}
              mode='dropdown'
            >
              {
                languages.map((item) => (<Picker.Item label={item.title} key={item.key} value={item.key} />))
              }
            </Picker>

          </View>

        </View>
  );
};


