
//header long means with 3 icons and 1 title

import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform
} from "react-native";
import theme from '../../Theme'
import {Feather} from '@expo/vector-icons'

const HeaderLong = ()=> {
        return (
            <View style={styles.container}>
                <TouchableOpacity><Feather name="menu" size={24} color={theme.titleColor} /></TouchableOpacity>
                <Text style={styles.title}>Beyond</Text>
                <TouchableOpacity><Feather name="bell" size={24} color={theme.titleColor} /></TouchableOpacity>
                <TouchableOpacity><Feather name="message-circle" size={24} color={theme.titleColor} /></TouchableOpacity>
            </View>
        );
}
export default HeaderLong;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },
    title:{
        fontSize:Platform.OS === 'ios' ? theme.xxxl * 1.3 : theme.xxxl,
        fontFamily:theme.copper,
        color:theme.titleColor
    }
});