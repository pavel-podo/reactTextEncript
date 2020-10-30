import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { THEME } from "../data/THEME";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from "react-redux";
import {useRoute} from '@react-navigation/native';





export const Header = ({ navigation }) => {
    
    const headerTitle = useSelector((state)=>state.headerReducer.headerTitle)
    const route = useRoute().name;
    console.log('route',route.name)
    return (
        <View style={styles.header} elevation={7}>
            <View style={styles.headerButton}>
                <TouchableOpacity  onPress={() => navigation.goBack()} >
                    <Entypo name="arrow-with-circle-left" size={30} color="white" />
                </TouchableOpacity>
            </View>
            <View>
                <Text style = {styles.headerText}>{headerTitle}</Text>
            </View>
            <View style={styles.headerButton}>{
                route != 'Setting' ?   (
                    <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                    <AntDesign name="setting" size={30} color="white" />
                    </TouchableOpacity>
                ):false
                
            }
              
            </View>


        </View>
    );
};
const styles = StyleSheet.create({
    header: {
        //justifyContent:'row',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "100%",
        height: 80,
        backgroundColor: THEME.header_color,
        marginBottom: 5,
      },
      headerButton: {
        //backgroundColor:'white',
        marginTop:14,
        marginHorizontal: 36,
      },
      headerText:{
        marginTop:12,
          color:'white',
          fontSize:22,

      }
});
