import React, { useState } from "react";
import { AsyncStorage, StyleSheet, View, Text, TextInput, Picker, TouchableOpacity } from "react-native";
import { Header } from "./Header"
import {
  headerTitleEdit
} from "../store/actions/headerTitle";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-native-elements";

export const AboutScreen = ({ navigation }) => {
  const curentTheme = useSelector((state) => state.themeReducer.theme);
  const dispatch = useDispatch();
  const currentIntLang = useSelector((state) => state.interfaceLanguageReducer.interfaceLanguage);
  dispatch(headerTitleEdit(currentIntLang.settings))






  const _storeData = async (key,value) => {
    try {
      await AsyncStorage.setItem(
        key,
        value
      );
    } catch (error) {
      console.log(error)
      // Error saving data
    }
  };

  _storeData('key1','val1')
  _storeData('key2','val2')
  _storeData('key3','val3')

  const _retrieveData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // We have data!!
        console.log(value);
      }else{
        console.log('do not have')
      }
    } catch (error) {
      // Error retrieving data
      console.log(error)
    }
  };
  const getValue = () => {
    console.log('go')
    _retrieveData('key1')
    _retrieveData('key33')
    _retrieveData('key3')
  }





  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: curentTheme.bg_color,
      width: "100%",
    },
    settingItem: {
      borderColor: curentTheme.header_color,
      borderBottomWidth: 1,
      width: '100%',
      paddingBottom: 20,
      paddingTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',

    },
    settingWrapper: {
      width: '100%',
    },

  });
  return (
    <View style={styles.container}>
      <Header navigation={navigation}></Header>
      <View style={styles.settingWrapper}>
        <TextInput
          style={{ backgroundColor: 'white' }}
          defaultValue={data}
        >
        </TextInput>
        <Button
          onPress={getValue}
        ></Button>
      </View>
    </View>
  );
};

