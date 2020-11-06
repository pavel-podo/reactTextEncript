import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StartScreen } from './src/screens/StartScreen';
import { MainScreen } from './src/screens/MainScreen';
import { AboutScreen } from './src/screens/AboutScreen';
import { SettingScreen } from './src/screens/SettingScreen';
import { Provider } from 'react-redux'
import store from './src/store'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppLoading } from 'expo';
import { AsyncStorage } from "react-native";




const Stack = createStackNavigator();
export default function App() {
  const [isReady, setIsReady] = useState(false)
  const [langIndex, setLangIndex] = useState(0)
  const [langKey, setLangKey] = useState('en')
  const [themeIndex, setThemeIndex] = useState(0)
  const [messageIndex, setMessageIndex] = useState(0)
  const loadApplication = async () => {
    try {
      const storageArr = await AsyncStorage.getAllKeys((err, keys) => { });
      console.log('storageArr', storageArr)
      const allValue = await AsyncStorage.multiGet(['langTitleIndex', 'langKey', 'themeIndex', 'messageIndex'], (err, stores) => { 
        
      })
      console.log('allValue', allValue)
      console.log('langTitleIndex', allValue[0][1])
      console.log('langKey', allValue[1][1])
      console.log('themeIndex', allValue[2][1])
      console.log('messageIndex', allValue[3][1])
      const titleIndex = allValue[0][1]
      const langKey = allValue[1][1]
      const themeIndex = allValue[2][1]
      const messageIndex = allValue[3][1]
      if (titleIndex !== null) {
        setLangIndex(titleIndex)
      }
      if (langKey !== null) {
        setLangKey(langKey)
      }
      if (themeIndex !== null) {
        setThemeIndex(themeIndex)
      }
      if (messageIndex !== null) {
        setMessageIndex(messageIndex)
      }


      /*
        "UID234",
    "UID345",
    "key",
    "key1",
    "key2",
    "key3",
    "langIndex",
    "langKey",
    "langTitleIndex",
    "langTitlekey",
        *//*
  const titleIndex = await AsyncStorage.getItem('langTitleIndex');
  if (titleIndex !== null) {
    // We have data!!
    const langKey = await AsyncStorage.getItem('langKey');
    if (langKey !== null) {
      setLangIndex(titleIndex)
      setLangKey(langKey)
    }
  } else {
    console.log('do not have')
   
  }*/
    } catch (error) {
      // Error retrieving data
      console.log(error)
    }
  }




  
  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onError={(err) => Console.log(err)}
        onFinish={() => setIsReady(true)}
      >
      </AppLoading>

    )
  }
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator >
          <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }}
            initialParams={{
              langIndex: langIndex,
              langKey: langKey,
              messageIndex:messageIndex,
              themeIndex:themeIndex,
            }} />
          <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Setting" component={SettingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="About" component={AboutScreen}
            options={{ headerShown: false }} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
