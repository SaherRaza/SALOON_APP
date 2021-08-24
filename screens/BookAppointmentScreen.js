import React from 'react';

import {
    View, StyleSheet, Text, TouchableOpacity,
    Image
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


import Ionicons from 'react-native-vector-icons/Ionicons';

function BookAppointmentScreen({navigation}) {
    return (
        <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
                    <View style={styles.iconPosition}>
                    <TouchableOpacity onPress={() => navigation.goBack()}
                        style={{ marginLeft: 20 }}>
                    <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
                        </TouchableOpacity>
                </View>
                <View style={styles.textPosition}>
                        <Text style={styles.topTextStyle}>Book Appointment</Text>
                    </View>
            </View>
            <View style={styles.centerContainer}>
                <Image style={styles.imageStyle}
                    source={require('../assets/icons/done.png')} />
                <Text style={styles.successTextStyle}>Success</Text>
                <Text style={styles.textStyle}>Your appointment is placed successfully.</Text>
                <Text style={styles.textStyle}>We are looking to see you on that day.</Text>
                <Text style={styles.textStyle}>Thank you</Text>
            </View>
            </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#FD928B",
        flex:1
    },
    headerContainer: {
        flexDirection: 'row',
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
      elevation:2
    },
    iconPosition: {
        flex: 1,
    },
    textPosition: {
        flex: 3,
    },
    topTextStyle: {
         fontSize: 18,
    fontWeight: "600",
    fontFamily: "poppins.semibold",
        color: "#FFFFFF",
    },
    centerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex:0.8
    },
    imageStyle: {
        height: 80,
        width: 80,
    },
    successTextStyle: {
         fontSize: 20,
    fontWeight: "600",
    fontFamily: "poppins.semibold",
        color: "#FFFFFF",
    },
    textStyle: {
        fontSize: 16,
    fontWeight: "400",
    fontFamily: "poppins.regular",
        color: "#FFFFFF",
    }
})
export default BookAppointmentScreen;