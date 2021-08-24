import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import  Ionicons  from 'react-native-vector-icons/Ionicons';

const AppButton = ({ buttonTitle, iconName, backgroundColor, color, iconSize }) => {

    let bgColor = backgroundColor;
    
    return (
        <TouchableOpacity  style={[styles.buttonContainer, {backgroundColor: bgColor}]} >
            <Ionicons name={iconName} size={iconSize} color="#095AB2" />
            <Text style={[styles.buttonText, {color: color}]}>{buttonTitle}</Text>
        </TouchableOpacity>
    );
};

export default AppButton;

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#E8E8E8",
        flexDirection: 'row', 
         width: '100%', height:'28%'
       
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "500",
        marginHorizontal: wp('2%'),
        fontFamily:"poppins.semibold", 
    },
});
