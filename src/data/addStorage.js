import { AsyncStorage } from "react-native";

export const  setStorageValue = async (key,value) => {
      console.log('key,value',key,value)
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