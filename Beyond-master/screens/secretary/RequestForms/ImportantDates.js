import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Picker,
    StatusBar,
    Image
} from "react-native";
import theme from '../../../Theme'
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FooterSecretary from '../../../components/secretary/FooterSecretary'
import HeaderLongSecretary from "../../../components/secretary/HeaderLongSecretary";
import { Ionicons, SimpleLineIcons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import DateTimePicker from "react-native-modal-datetime-picker";
import Date_icon from "../../../assets/date.svg"
class ImportantDates extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false,
            date: 'Pick Date',
            time: 'Pick Time',
        };
    }


    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };

    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };

    handleDatePicked = (date) => {
        this.hideDateTimePicker();
        this.formatDate(date);
    };

    formatDate = (date) => {
        return this.setState({
            date: `${date.getDate()}/${date.getMonth() +
                1}/${date.getFullYear()}`
        });
    };

    showDateTimePicker2 = () => {
        this.setState({ isDateTimePickerVisible2: true });
    };

    hideDateTimePicker2 = () => {
        this.setState({ isDateTimePickerVisible2: false });
    };

    handleDatePicked2 = (time) => {
        this.hideDateTimePicker2();
        this.formatDate2(time)
    };

    formatDate2 = (time) => {
        return this.setState({ time: `${time.getHours()}:${time.getMinutes()}` });
    };

    render() {
        return (
            <ImageBackground source={require('../../../assets/bg.png')} style={styles.container}>
                <View style={styles.header}>
                    {/* this is the header component with 2 icons */}
                    <HeaderLongSecretary />
                </View>
                <View style={styles.titleSpace}>
                    {/* space for title */}
                    <Text style={styles.title}>Request Form</Text>
                </View>




                <View style={styles.body}>

                    {/* This is entire white body container */}

                    <ScrollView>



                        <View style={styles.emailcontainer}>
                            <Date_icon height={helpers.size(22)} width={helpers.size(22)} />
                            <Text style={styles.placeholder}>Appointment</Text>
                        </View>
                        <View style={styles.inputfield}>
                            <TextInput maxLength={50} placeholder="Name here" style={styles.textinputstyle} />
                        </View>



                        <View style={styles.nextcontainer}>
                            <SimpleLineIcons name="location-pin" size={20} color={theme.primary} />
                            <Text style={styles.placeholder}>City</Text>
                        </View>
                        <View style={styles.inputfield}>
                            <TextInput maxLength={50} placeholder="Doha,Qutor" style={styles.textinputstyle} />
                        </View>

                        <View style={styles.nextcontainer}>
                            <SimpleLineIcons name="location-pin" size={20} color={theme.primary} />
                            <Text style={styles.placeholder}>Location</Text>
                        </View>
                        <View style={styles.inputfield}>
                            <TextInput maxLength={50} placeholder="Office" style={styles.textinputstyle} />
                        </View>




                        <View style={styles.nextcontainer}>
                            <Date_icon height={helpers.size(20)} width={helpers.size(20)} />
                            <Text style={styles.placeholder}>Date</Text>
                        </View>
                        <TouchableOpacity onPress={this.showDateTimePicker} style={styles.inputfield}>
                            <MaterialIcons style={{ paddingRight: 5 }} name="date-range" size={20} color={'#7c7c7c'} />
                            <Text style={styles.inputText}>{this.state.date}</Text>
                            <DateTimePicker
                                isVisible={this.state.isDateTimePickerVisible}
                                onConfirm={this.handleDatePicked}
                                onCancel={this.hideDateTimePicker}
                            />
                        </TouchableOpacity>



                        <View style={styles.nextcontainer}>
                            <Ionicons name="md-time" size={20} color={theme.primary} />
                            <Text style={styles.placeholder}>Time</Text>
                        </View>
                        <TouchableOpacity onPress={this.showDateTimePicker2} style={styles.inputfield}>
                            <Ionicons style={{ paddingRight: 5 }} name="md-time" size={20} color={'#7c7c7c'} />
                            <Text style={styles.inputText}>{this.state.time}</Text>
                            <DateTimePicker
                                mode={'time'}
                                isVisible={this.state.isDateTimePickerVisible2}
                                onConfirm={this.handleDatePicked2}
                                onCancel={this.hideDateTimePicker2}
                            />
                        </TouchableOpacity>



                        <View style={styles.noteContainer}>
                            <MaterialCommunityIcons name="note-outline" size={20} color={theme.primary} />
                            <Text style={styles.placeholder}>Extra Note</Text>
                        </View>
                        <View style={styles.inputfield}>
                            <TextInput multiline={true} maxLength={250} style={styles.textinputstyle} />
                        </View>





                        {/* Buttons start here */}

                        {/* empty view for height */}

                        <View style={{ height: hp(4) }}></View>

                        <TouchableOpacity style={styles.backBtn}>
                            <Text style={styles.btntext}>Submit</Text>
                        </TouchableOpacity>

                        <View style={{ height: hp(3) }}></View>


                    </ScrollView>

                </View>

            </ImageBackground>
        );
    }
}
export default ImportantDates;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 24 : 0,
    },
    header: {
        flex: 1,
    },
    titleSpace: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: wp(6)
    },
    body: {
        flex: 8,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: '#fff',
        paddingHorizontal: 35,
        paddingVertical: 20
    },
    footer: {
        flex: 1,
    },
    title: {
        fontSize: theme.xxl / 1.2,
        color: theme.titleColor,
        fontFamily: theme.pop
    },
    nameTitle: {
        fontFamily: theme.popbold,
        color: theme.primary,
        fontSize: theme.large
    },
    caption: {
        fontFamily: theme.pop,
        color: theme.secondary,
        fontSize: theme.small
    },
    mainButton: {
        backgroundColor: theme.primary,
        justifyContent: 'center',
        alignItems: 'center',
        width: wp(30),
        height: hp(6),
        borderRadius: 3,
        flexDirection: 'row',
        marginTop: hp(2)
    },
    secondButton: {
        backgroundColor: theme.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        width: wp(30),
        height: hp(6),
        borderRadius: 3,
        flexDirection: 'row',
        marginTop: hp(2)
    },
    btnText: {
        color: '#fff',
        fontFamily: theme.popbold,
        fontSize: theme.large,
    },
    backgroundContainer: {
        backgroundColor: theme.transparentColor,
        flex: 1,
        borderRadius: 10,
        padding: 30
    },
    textinputstyle: {
        width: '100%',
        height: '100%',
        fontSize: theme.large
    },
    containerCard: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ede5d8',
        height: hp(11),
        width: wp(20),
        borderRadius: 10,
        marginTop: hp(1),
    },
    menutext: {
        color: theme.primary,
        fontSize: theme.small / 1.2,
        fontFamily: theme.pop,
        textAlign: 'center'
    },
    buttonContainer: {
        width: '100%',
        height: '24%',
        marginTop: StatusBar.currentHeight,
        justifyContent: 'space-between',
        paddingLeft: 25,
        paddingRight: 25,
        flexDirection: 'row',
        alignItems: 'center'
    },
    emailcontainer: { flexDirection: 'row', paddingTop: hp(3), paddingBottom: hp(1) },
    nextcontainer: { flexDirection: 'row', paddingTop: hp(3), paddingBottom: hp(1), alignItems: 'center' },
    noteContainer: { flexDirection: 'row', paddingTop: hp(3), paddingBottom: hp(1), alignItems: 'center' },
    placeholder: {
        color: theme.primary,
        paddingLeft: 10,
        fontFamily: theme.pop
    },
    inputfield: {
        backgroundColor: '#F3F3F3',
        width: '100%',
        paddingVertical: 15,
        borderRadius: 5,
        paddingLeft: 10,
        alignItems: 'center',
        flexDirection: 'row',
        paddingRight: 20
    },
    btntext: {
        fontSize: theme.large,
        color: '#fff',
        fontFamily: theme.pop
    },
    inputText: {
        fontFamily: theme.pop,
        fontSize: theme.medium
    },
    backBtn: {
        backgroundColor: theme.primary,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: hp(7.5),
        borderRadius: 5
    },
});