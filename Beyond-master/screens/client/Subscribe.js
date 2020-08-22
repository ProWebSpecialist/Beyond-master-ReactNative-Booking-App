import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    FlatList,
    TouchableOpacity
} from "react-native";
import theme from '../../Theme'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Footer from '../../components/both/Footer'
import HeaderSmall from '../../components/both/HeaderSmall'
import ContactCard from '../../components/client/ContactCard'
//react native swiper, please check docs for more info
import Swiper from 'react-native-swiper'

//replace with your json
const DATA = [
    {
      id: '1',
      title: 'First Item',
    },
    {
      id: '2',
      title: 'Second Item',
    },
    {
      id: '3',
      title: 'Third Item',
    },
    {
        id: '4',
        title: 'First Item',
      },
      {
        id: '5',
        title: 'Second Item',
      },
      {
        id: '6',
        title: 'Third Item',
      },
      {
        id: '7',
        title: 'First Item',
      },
      {
        id: '8',
        title: 'Second Item',
      },
      {
        id: '9',
        title: 'Third Item',
      },
      
      
      
  ];
  

const Subscribe = ()=> {
        return (
            <ImageBackground source={require('../../assets/bg.png')} style={styles.container}>
                <View style={styles.header}>
                    {/* this is the header component with 2 icons */}
                    <HeaderSmall leftIcon="arrow-left" rightIcon="settings"/>
                </View>
                <View style={styles.titleSpace}>
                     {/* space for title */}
                 <Text style={styles.title}>Subscribe</Text>
                </View>
                <View style={styles.body}>
                

                    {/* SWIPER TO SEPARTE THE SCREENS  */}

                    <Swiper activeDotColor={theme.primary} style={styles.wrapper} showsButtons={false}>
                   
                    <View style={styles.slide1}>

                       {/* PLAN TITLE  */}

                       <TouchableOpacity style={styles.mainContainer}>
                        <Text style={styles.planTitle}>BEYOND PLUS</Text>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={styles.planCost}>2000SAR</Text>
                        <Text style={styles.planDuration}>/ 30days</Text>
                        </View>
                       </TouchableOpacity>

                        <View style={{height:hp(40)}}>
                        <FlatList
                        data={DATA}
                        renderItem={({ item }) => 
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('../../assets/tick.png')} style={{width:15,height:15}} />
                            <Text style={styles.featureText}>{item.title}</Text>
                        </View>
                        }
                        keyExtractor={item => item.id}
                        />
                       </View>

                      <TouchableOpacity style={styles.mainBtn}>
                      <Text style={styles.btnText}>Subscribe</Text>
                      </TouchableOpacity>

                    </View>






                    <View style={styles.slide2}>

                      {/* PLAN TITLE  */}

                      <TouchableOpacity style={styles.mainContainer}>
                      <Text style={styles.planTitle}>BEYOND PLUS</Text>
                      <View style={{flexDirection:'row',alignItems:'center'}}>
                      <Text style={styles.planCost}>2000SAR</Text>
                      <Text style={styles.planDuration}>/ 30days</Text>
                      </View>
                      </TouchableOpacity>

                      <View style={{height:hp(40)}}>
                      <FlatList
                      data={DATA}
                      renderItem={({ item }) => 
                      <View style={{flexDirection:'row',alignItems:'center'}}>
                          <Image source={require('../../assets/tick.png')} style={{width:15,height:15}} />
                          <Text style={styles.featureText}>{item.title}</Text>
                      </View>
                      }
                      keyExtractor={item => item.id}
                      />
                      </View>

                      <TouchableOpacity style={styles.mainBtn}>
                      <Text style={styles.btnText}>Subscribe</Text>
                      </TouchableOpacity>

                      </View>







                      <View style={styles.slide3}>

                        {/* PLAN TITLE  */}

                        <TouchableOpacity style={styles.mainContainer}>
                        <Text style={styles.planTitle}>BEYOND PLUS</Text>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={styles.planCost}>2000SAR</Text>
                        <Text style={styles.planDuration}>/ 30days</Text>
                        </View>
                        </TouchableOpacity>

                        <View style={{height:hp(40)}}>
                        <FlatList
                        data={DATA}
                        renderItem={({ item }) => 
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('../../assets/tick.png')} style={{width:15,height:15}} />
                            <Text style={styles.featureText}>{item.title}</Text>
                        </View>
                        }
                        keyExtractor={item => item.id}
                        />
                        </View>

                        <TouchableOpacity style={styles.mainBtn}>
                          <Text style={styles.btnText}>Subscribe</Text>
                        </TouchableOpacity>

                        </View>


                    </Swiper>
                            
                </View>
                
            </ImageBackground>
        );
}
export default Subscribe;

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
        paddingHorizontal:25
    },
    footer:{
        flex:1,
    },
    title:{
        fontSize:theme.xxl / 1.2,
        color:theme.titleColor,
        fontFamily:theme.pop
    },
    slide1: {
        flex: 1,
        paddingTop:hp(2)
      },
      slide2: {
        flex: 1,
        paddingTop:hp(2)
      },
      slide3: {
        flex: 1,
        paddingTop:hp(2)
      },
    mainContainer:{
        width:'100%',
        height:hp(14),
        borderRadius:10,
        marginTop:hp(1),
    },
    planTitle:{
        color:theme.secondary,
        fontFamily:theme.pop,
        fontSize:theme.xxl,
        paddingLeft:wp(2)
    },
    planCost:{
        color:theme.primary,
        fontFamily:theme.pop,
        fontSize:theme.xxl /1.2,
        paddingLeft:wp(2)
    },
    planDuration:{
        color:theme.secondary,
        fontFamily:theme.pop,
        fontSize:theme.medium,
        paddingLeft:wp(2)
    },
    featureText:{
        color:theme.secondary,
        fontFamily:theme.pop,
        fontSize:theme.medium,
        paddingLeft:wp(4),
        paddingTop:hp(1)
    },
    mainBtn:{
      width:'100%',
      backgroundColor:theme.primary,
      justifyContent:'center',
      alignItems:'center',
      height:hp(7),
      borderRadius:5
    },
    btnText:{
      color:'#fff',
      fontFamily:theme.pop,
      fontSize:theme.medium,
    }
});