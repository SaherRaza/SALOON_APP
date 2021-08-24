import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../colors/colors';



export default function ServiceCard({name, subTitle, price,onpress}) {
  return (
    <View>
      <View style={{...styles.container}}>
        <View style={styles.leftTextContainer}>
          <View>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>
              {subTitle}{' '}
              
              
            </Text>
          </View>
        </View>
        <Text style={styles.price}>{price}</Text>
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp('90%'),
    height: 61,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius:8,
  },


  title: {
   // fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: colors.secondry,
    fontWeight: '500',
    left: 0,
  },

  subtitle: {
 //   fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: colors.topservicesColor,
    fontWeight: '400',
    left: 0,
  },

  leftTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  image:
  {
      width:15,
      height:15,
  },
  price:
  {
 //   fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: colors.secondry,
    fontWeight: '500',
  }
});