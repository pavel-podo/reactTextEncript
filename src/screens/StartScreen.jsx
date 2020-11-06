
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { interfaceLanguageEdit, languageTitleEdit } from "../store/actions/interfaceLanguage"
import { messageLangEdit } from "../store/actions/messageLang"
import { themeEdit } from "../store/actions/theme"
import{themes}from "../data/THEME"
import{lang}from "../lang/lang"
import {
  codeStatusEdit,
  keyEdit,
  textEdit,
  finishTextEdit,
  deEncriptTextEdit,
  asciiCodeEdit,
} from "../store/actions/main";
import { languages, langInt } from '../data/languages'


export const StartScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
 
  useEffect(() => {
    const { langIndex, langKey,themeIndex,messageIndex } = route.params;
    console.log('route',route)
    console.log('mounted');
    console.log('add interface lang',langKey);
    console.log('langKey',langInt[langKey]);
    console.log('langIndex',languages[Number(langIndex)]);
    console.log('themeIndex',themes[Number(themeIndex)]);
    console.log('messageIndex',lang[Number(messageIndex)]);
    dispatch(interfaceLanguageEdit(langInt[langKey]))
    dispatch(languageTitleEdit(languages[Number(langIndex)]))
    dispatch(themeEdit(themes[Number(themeIndex)]))
    dispatch(messageLangEdit(lang[Number(messageIndex)]))
    return () => console.log('unmounting...');
  }, [])
  const intLang = useSelector((state) => state.interfaceLanguageReducer.interfaceLanguage);
  const curentTheme = useSelector((state) => state.themeReducer.theme);
  const curentMessageLang = useSelector((state) =>  state.messageLangReducer.lang);
//useSelector((state)=>console.log(state))

  dispatch(asciiCodeEdit(curentMessageLang.text))

  const goToTheCod = () => {
    dispatch(codeStatusEdit('code'))
    dispatch(keyEdit(''))
    dispatch(textEdit(''))
    dispatch(finishTextEdit(''))
    dispatch(deEncriptTextEdit(''))
    navigation.navigate('Main')
  };
  const goToTheDecod = () => {
    dispatch(codeStatusEdit('deCode'))
    dispatch(keyEdit(''))
    dispatch(textEdit(''))
    dispatch(finishTextEdit(''))
    dispatch(deEncriptTextEdit(''))
    navigation.navigate('Main')
  };
  const goToTheSettimg = () => {
    navigation.navigate('Setting')
  };
  const goToTheAbout = () => {
    navigation.navigate('About')
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: curentTheme.bg_color,
      alignItems: 'center',
      justifyContent: 'space-around',
      width: "100%",
    },
    btn: {
      marginVertical: 8,
      marginHorizontal: '10%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 20,
      backgroundColor: curentTheme.btn_color,
      borderRadius: 20,
      alignItems: "center",
    },
    text: {
      color: curentTheme.font_color,
      fontSize: 24,
      width: '81%',
      textAlign: 'center'
    },
    buttonWrapper: {
      width: "100%",
    },
    icon: {
      width: '18%',
      alignItems: 'center',
    }
  });
  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.btn}
          onPress={() => goToTheCod()}>
          <View style={styles.icon}>
            <Entypo name="arrow-with-circle-right" size={24} color={curentTheme.font_color} />
          </View>
          <Text style={styles.text}>{intLang.encrypt}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => goToTheDecod()}>
          <View style={styles.icon}>
            <Entypo name="arrow-with-circle-left" size={24} color={curentTheme.font_color} />
          </View>
          <Text style={styles.text}>{intLang.decrypt}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => goToTheSettimg()}>
          <View style={styles.icon}>
            <MaterialCommunityIcons name="settings" size={24} color={curentTheme.font_color} />
          </View>
          <Text style={styles.text}>{intLang.settings}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => goToTheAbout()}>
          <View style={styles.icon}>
            <AntDesign name="exclamationcircleo" size={24} color={curentTheme.font_color} />
          </View>
          <Text style={styles.text}>{intLang.about} </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

