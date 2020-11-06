import React from "react";
import { StyleSheet, View, Text, Picker } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { themeEdit } from "../store/actions/theme";
import { themes } from "../data/THEME"
import{setStorageValue} from "../data/addStorage"


export const SettingThemePicker = () => {
  const currentIntLang = useSelector((state) => state.interfaceLanguageReducer.interfaceLanguage);
  const curentTheme = useSelector((state) => state.themeReducer.theme);
  const dispatch = useDispatch();
  console.log('curentTheme', curentTheme)
  const changeTheme = (index) => {
    dispatch(themeEdit(themes[index]))    
    setStorageValue('themeIndex',String(index))
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
      color:curentTheme.second_font_color,
      fontSize: 16,
      marginLeft: 20,
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
        <Text style={styles.settingTitle}>{currentIntLang.themeColors}</Text>
      </View>
      <View>
        <Picker
          selectedValue={curentTheme.title}
          style={{ height: 50, width: 150,color:curentTheme.second_font_color}}
          onValueChange={(itemValue, itemIndex) => changeTheme(itemIndex)}
          mode='dropdown'
        >
          {
            themes.map((item, index) => (<Picker.Item label={item.title} key={item.title} value={item.title} />))
          }
        </Picker>

      </View>

    </View>
  );
};




/*{
  for (let key in themes)
  {
    return
    (<Picker.Item label={item.title} key={item.key} value={item.key} />)
  } 
  
}
*/