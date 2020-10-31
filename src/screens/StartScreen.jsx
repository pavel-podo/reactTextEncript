import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { THEME } from "../data/THEME";
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import {
  codeStatusEdit,
  keyEdit,
  textEdit,
  finishTextEdit,
  deEncriptTextEdit,
} from "../store/actions/main";
import {
  interfaceLanguageEdit, languageTitleEdit

} from "../store/actions/interfaceLanguage";

import { langInt, languages } from "../data/languages";

export const StartScreen = ({ navigation }) => {

  const dispatch = useDispatch();
 // dispatch(languageTitleEdit(languages[0]));
  const currentLang = useSelector((state) => state.interfaceLanguageReducer.languageTitle);
 // dispatch(interfaceLanguageEdit(langInt[currentLang.key]));
  const intLang = useSelector((state) => state.interfaceLanguageReducer.interfaceLanguage);




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
  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.btn}
          onPress={() => goToTheCod()}>
          <View style={styles.icon}>
            <Entypo name="arrow-with-circle-right" size={24} color="white" />
          </View>
          <Text style={styles.text}>{intLang.encrypt}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => goToTheDecod()}>
          <View style={styles.icon}>
            <Entypo name="arrow-with-circle-left" size={24} color="white" />
          </View>
          <Text style={styles.text}>{intLang.decrypt}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => goToTheSettimg()}>
          <View style={styles.icon}>
            <MaterialCommunityIcons name="settings" size={24} color="white" />
          </View>
          <Text style={styles.text}>{intLang.settings}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => goToTheAbout()}>
          <View style={styles.icon}>
            <AntDesign name="exclamationcircleo" size={24} color="white" />
          </View>
          <Text style={styles.text}>{intLang.about} </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.bg_color,
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
    backgroundColor: THEME.btn_color,
    borderRadius: 20,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 24,
    width: '81%',
    textAlign: 'center'
  },
  buttonWrapper: {
    width: "100%",
  },
  icon: {
    width: '18%',
    //    backgroundColor:'red',
    alignItems: 'center',
  }
});
