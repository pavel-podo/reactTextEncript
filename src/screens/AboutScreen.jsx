import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { THEME } from "../data/THEME";
import {Header} from "./Header"
import {
  headerTitleEdit
} from "../store/actions/headerTitle";
import { useSelector, useDispatch} from "react-redux";


export const AboutScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const intLang = useSelector((state) => state.interfaceLanguageReducer.interfaceLanguage);

  dispatch(headerTitleEdit(intLang.about))
  return (
    <View style={styles.container}>
    <Header navigation = {navigation}></Header>
    <View>
      <Text></Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.bg_color,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",

  },
});