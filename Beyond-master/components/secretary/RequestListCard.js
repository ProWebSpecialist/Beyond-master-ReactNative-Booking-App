import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import theme from "../../Theme";
import { MaterialIcons, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

const RequestListCard = (props) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('RequestDetails')} style={styles.container}>
            <View style={styles.leftEntry}>
                <Text style={styles.title}>{props.name}</Text>
                <Text style={styles.subtitle}>{props.requestname}</Text>
            </View>
            <View style={styles.rightEntry}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons name="md-time" size={18} color={theme.primary} />
                    <Text style={styles.dateTimeText}>{props.time}</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: 2, alignItems: 'center' }}>
                    <MaterialIcons name="date-range" size={16} color={theme.primary} />
                    <Text style={styles.dateTimeText}>{props.date}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}
export default RequestListCard;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: hp(13),
        backgroundColor: theme.transparentColor,
        marginTop: hp(2),
        borderRadius: 10,
        borderWidth: 1,
        borderColor: theme.primary,
        flexDirection: 'row',
        marginBottom: hp(1)
    },
    leftEntry: {
        width: '60%',
        height: '100%',
        justifyContent: 'center',
        paddingLeft: 15
    },
    rightEntry: {
        width: '40%',
        height: '100%',
        justifyContent: 'center',
    },
    title: {
        fontSize: theme.xl / 1.1,
        color: theme.primary,
        fontFamily: theme.pop,
        paddingLeft: 10
    },
    subtitle: {
        fontSize: theme.large / 1.2,
        color: theme.secondary,
        fontFamily: theme.pop,
        paddingLeft: 10
    },
    dateTimeText: {
        fontFamily: theme.pop,
        color: theme.secondary,
        fontSize: theme.medium,
        paddingLeft: 5
    }

});