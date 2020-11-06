import React from "react";
import { StyleSheet, View, Text, Picker,TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { messageLangEdit } from "../store/actions/messageLang";
import { lang } from "../lang/lang"
import{setStorageValue} from "../data/addStorage"


export const SettingMessageLangPicker = () => {
  const dispatch = useDispatch();
  const curentTheme = useSelector((state) => state.themeReducer.theme);
  const currentIntLang = useSelector((state) => state.interfaceLanguageReducer.interfaceLanguage);
  const currentMessageLang = useSelector((state) => state.messageLangReducer.lang);



  const changeMessageLang = (index) => {
    dispatch(messageLangEdit(lang[index]))
    setStorageValue('messageIndex',String(index))
  }
  const styles = StyleSheet.create({
    settingItem: {
      alignItems: 'center',
      borderColor: curentTheme.second_color,
      borderBottomWidth: 1,
      width: '100%',
      paddingBottom: 7,
      paddingTop: 7,
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    settingItemWrap: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',

    },
    sumbolWrap: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',

    },
    settingWrapper: {
      width: '100%',
    },
    settingTitle: {
      fontSize: 16,
      marginLeft: 20,
      color: curentTheme.second_font_color
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
    input: {
      width: "85%",
      backgroundColor:curentTheme.second_color
      //width: "100%",
    },
    inputWrapper: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 5,
      borderRadius: 8,
      backgroundColor:curentTheme.second_color,
      width: "80%",
      marginVertical: 8,
      paddingHorizontal: 5,
    },
  });
  return (

    <View style={styles.settingItem}>
      <View style={styles.settingItemWrap}>
        <View>
          <Text style={styles.settingTitle}>{currentIntLang.messageLanguage}</Text>
        </View>
        <View>
          <Picker
            selectedValue={currentMessageLang.key}
            style={{ height: 50, width: 150, color: curentTheme.second_font_color }}
            onValueChange={(itemValue, itemIndex) => changeMessageLang(itemIndex)}
            mode='dropdown'

          >
            {
              lang.map((item, index) => {
                // console.log('item',item);
                // console.log('index',index);
                return (
                  <Picker.Item label={item.title} key={item.key} value={item.key} />
                )
              })
            }
          </Picker>
        </View>


      </View>
      <View style={styles.sumbolWrap}>
        <Text style={styles.settingTitle}>
          Допустимые символы:
      </Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            numberOfLines={4}
            multiline
            editable={false}
            value={currentMessageLang.text}
          ></TextInput>
          </View>
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