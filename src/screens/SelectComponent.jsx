import React, { useState } from "react";
import { StyleSheet, View, Text, Picker, TouchableOpacity } from "react-native";
import { THEME } from "../data/THEME";
import { Header } from "./Header"
import {
  headerTitleEdit
} from "../store/actions/headerTitle";
import { useDispatch, useSelector} from "react-redux";


export const SelectComponent = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  const intLang = useSelector((state) => state.interfaceLanguageReducer.interfaceLanguage);

  return (


        <View style={styles.settingItem}>
          <View>
            <Text style={styles.settingTitle}>Язык приложения</Text>
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
     
  );
};
const styles = StyleSheet.create({

  settingItem: {
    alignItems:'center',
    borderColor: THEME.header_color,
    borderBottomWidth: 1,
    width: '100%',
    paddingBottom: 20,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  settingTitle: {
    fontSize: 20,
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
  }
});
