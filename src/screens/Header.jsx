import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from "react-redux";
import { useRoute } from '@react-navigation/native';





export const Header = ({ navigation }) => {
    const curentTheme = useSelector((state) => state.themeReducer.theme);
    const headerTitle = useSelector((state) => state.headerReducer.headerTitle)
    useSelector((state)=> console.log(state))
    console.log('HEADER')
    const route = useRoute().name;
    const styles = StyleSheet.create({
        header: {
            //justifyContent:'row',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: "100%",
            height: 80,
            backgroundColor: curentTheme.header_color,
            marginBottom: 5,
        },
        headerButton: {
            //backgroundColor:'white',
            marginTop: 14,
            marginHorizontal: 36,
        },
        headerText: {
            marginTop: 12,
            color: 'white',
            fontSize: 22,
            color:curentTheme.font_color

        }
    });
    return (
        <View style={styles.header} elevation={7}>
            <View style={styles.headerButton}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Entypo name="arrow-with-circle-left" size={30} color={curentTheme.font_color} />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.headerText}>{headerTitle}</Text>
            </View>
            <View style={styles.headerButton}>{
                route != 'Setting' ? (
                    <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                        <AntDesign name="setting" size={30} color={curentTheme.font_color} />
                    </TouchableOpacity>
                ) : false

            }

            </View>


        </View>
    );
};

