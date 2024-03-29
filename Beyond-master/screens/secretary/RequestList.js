//Order history screen design from the both panel
import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    ImageBackground,
    ScrollView,
    FlatList
} from "react-native";
import theme from '../../Theme'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Footer from '../../components/both/Footer'
import HeaderSmall from '../../components/both/HeaderSmall'
import RequestListCard from '../../components/secretary/RequestListCard'
//replace with your json data for order history
const requestlist = [
    {
      id: '1',
      name: 'Ahmed Abdali',
      requestname:'Development here',
      time:'5:00PM',
      date:'16 Apr'
    },
    {
        id: '2',
        name: 'Ahmed Abdali',
        requestname:'Development here',
        time:'5:00PM',
        date:'16 Apr'
      },
      {
        id: '3',
        name: 'Ahmed Abdali',
        requestname:'Development here',
        time:'5:00PM',
        date:'16 Apr'
      },
      {
        id: '4',
        name: 'Ahmed Abdali',
        requestname:'Development here',
        time:'5:00PM',
        date:'16 Apr'
      },
      {
        id: '5',
        name: 'Ahmed Abdali',
        requestname:'Development here',
        time:'5:00PM',
        date:'16 Apr'
      },
      {
        id: '6',
        name: 'Ahmed Abdali',
        requestname:'Development here',
        time:'5:00PM',
        date:'16 Apr'
      },
      {
        id: '7',
        name: 'Ahmed Abdali',
        requestname:'Development here',
        time:'5:00PM',
        date:'16 Apr'
      },
      {
        id: '8',
        name: 'Ahmed Abdali',
        requestname:'Development here',
        time:'5:00PM',
        date:'16 Apr'
      },
      {
        id: '9',
        name: 'Ahmed Abdali',
        requestname:'Development here',
        time:'5:00PM',
        date:'16 Apr'
      },
   

  ];


const RequestList = ()=> {
        return (
            <ImageBackground source={require('../../assets/bg.png')} style={styles.container}>
                <View style={styles.header}>
                    {/* this is the header component with 2 icons */}
                    <HeaderSmall leftIcon="arrow-left" rightIcon="settings"/>
                </View>
                <View style={styles.titleSpace}>
                     {/* space for title */}
                 <Text style={styles.title}>Requests List</Text>
                </View>
                <View style={styles.body}>
                    {/* flat list to render custom notifications, please use this component to filter out the list 
                    that you want to keep as "Now" and "Earlier" */}
                    <FlatList
                    data={requestlist}
                    renderItem={({ item }) => 
                    <RequestListCard 
                    name={item.name} 
                    requestname={item.requestname}
                    time={item.time} 
                    date={item.date}

                    />

                    }
                    keyExtractor={item => item.id}
                    />
                 
                </View>
            </ImageBackground>
        );
}
export default RequestList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:Platform.OS === 'ios' ? 24 : 0,
    },
    header:{
        flex:1,
    },
    titleSpace:{
        flex:1,
        justifyContent:'center',
        paddingLeft:wp(6)
    },
    body:{
        flex:8,
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        backgroundColor:'#fff',
        paddingHorizontal:25,
        paddingVertical:10
    },
    footer:{
        flex:1,
    },
    title:{
        fontSize:theme.xxl / 1.2,
        color:theme.titleColor,
        fontFamily:theme.pop
    },
    justnowtext:{
        paddingTop:hp(3),
        fontFamily:theme.pop,
        color:'#7c7c7c',
        fontSize:theme.small
    }
});