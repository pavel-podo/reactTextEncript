import React, { useState } from "react";
import { StyleSheet, View, Text, Picker, TouchableOpacity } from "react-native";
import { THEME } from "../data/THEME";
import { Header } from "./Header"
import {
  headerTitleEdit
} from "../store/actions/headerTitle";
import { useDispatch, useSelector } from "react-redux";
import { interfaceLanguageEdit, languageTitleEdit } from "../store/actions/interfaceLanguage";
import { languages, langInt } from "../data/languages";
import{SettingLangPicker} from "./SettingLangPicker"



export const SettingScreen = ({ navigation }) => {

  const dispatch = useDispatch();
  const currentIntLang = useSelector((state) => state.interfaceLanguageReducer.interfaceLanguage);
  dispatch(headerTitleEdit(currentIntLang.settings))


  return (
    <View style={styles.container}>
      <Header navigation={navigation}></Header>
      <View style={styles.settingWrapper}>
          <SettingLangPicker/>
      </View>

    </View>
  );
};
const styles = StyleSheet.create({
 
  settingItem: {
    alignItems: 'center',
    borderColor: THEME.header_color,
    borderBottomWidth: 1,
    width: '100%',
    paddingBottom: 20,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  settingWrapper: {
    width: '100%',
  },
  settingTitle: {
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
/*
      <View style={styles.settingWrapper}>
        <View style={styles.settingItem}>
          <View>
            <Text style={styles.settingTitle}>{intLang.messageLanguage}</Text>
          </View>
          <View>
            <Picker
              selectedValue={selectedValue}
              style={{ height: 50, width: 150 }}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              mode='dropdown'
            >
              <Picker.Item label="Русский" value="ru" />
              <Picker.Item label="Другой" value="inne1" />
              <Picker.Item label="Другой" value="inne2" />
              <Picker.Item label="Другой" value="inne3" />
              <Picker.Item label="Другой" value="inne4" />
              <Picker.Item label="Другой" value="inne5" />
            </Picker>

          </View>
        </View>

        <View style={styles.settingItem}>
          <View>
            <Text style={styles.settingTitle}>{intLang.themeColors}</Text>
          </View>
          <View>
            <Picker
              selectedValue={selectedValue}
              style={{ height: 50, width: 150 }}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              mode='dropdown'
            >
              <Picker.Item label="Русский" value="ru" />
              <Picker.Item label="Другой" value="inne1" />
              <Picker.Item label="Другой" value="inne2" />
              <Picker.Item label="Другой" value="inne3" />
              <Picker.Item label="Другой" value="inne4" />
              <Picker.Item label="Другой" value="inne5" />
            </Picker>

          </View>
          
        </View>


      </View>
      */