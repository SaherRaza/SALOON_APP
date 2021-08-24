import React from 'react';

import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Ionicons from 'react-native-vector-icons/Ionicons';

function Booking2({navigation}) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.iconPosition}>
          <TouchableOpacity onPress={() => navigation.goBack()}
            style={{ marginLeft: 20 }}>
            <Ionicons name="chevron-back" size={24} color="#1A1A1A" />
          </TouchableOpacity>
        </View>
        <View style={styles.textPosition}>
          <Text style={styles.topTextStyle}>Confirm Appointment</Text>
        </View>
      </View>
      <View style={styles.lineBreak}></View>

      <View>
        <Text style={styles.serviceTextStyle}>Summary</Text>

        <View style={styles.serviceContainer}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.imageStyle}
                source={require('../assets/image3.png')}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.blackColorText}>Royal Beauty Salon</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.greyColorText}>Handling by </Text>
                <Text style={[styles.blackColorText, {fontSize:14}]}>Marshall</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.greyColorText}>On </Text>
                <Text style={[styles.blackColorText, {fontSize:14}]}>02 Wed, Feb . 11:00 AM</Text>
              </View>
            </View>
          </View>
          <View
            style={[
              styles.lineBreak,
              {width: 374, alignSelf: 'center', marginTop: 5},
            ]}></View>
          
          <View style={{padding: 10}}>
            <Text style={[styles.greyColorText,{fontFamily:"poppins.semibold", fontSize:14}]}>Services</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={[styles.blackColorText,{fontSize:14}]}>Regular Haircut</Text>
                <Text style={styles.greyColorText}>30 minutes</Text>
              </View>
              <View>
                <Text style={[styles.blackColorText,{fontSize:14}]}>$15</Text>
              </View>
            </View>
          </View>

          <View
            style={[
              styles.lineBreak,
              {width: 344, alignSelf: 'center'},
            ]}></View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
            }}>
            <View>
              <Text style={[styles.blackColorText,{fontSize:14}]}>Hair Coloring</Text>
              <Text style={styles.greyColorText}>50-60 minutes</Text>
            </View>
            <View>
              <Text style={[styles.blackColorText,{fontSize:14}]}>$40</Text>
            </View>
          </View>
          <View
            style={[
              styles.lineBreak,
              {width: 374, alignSelf: 'center'},
            ]}></View>

          <View
            style={{
              padding: 10,
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop:5
            }}>
            <Text style={[styles.blackColorText,{fontSize:16, fontFamily:"poppins.semibold"}]}>Total Pay</Text>
            <Text style={styles.pinkColorText}>$50</Text>
          </View>
        </View>

        <View style={{padding:20}}>
          <Text>Payment Method</Text>
          
          <TouchableOpacity onPress={() => console.log('pressed')}>
    
            <View style={styles.PaymentBtn}>
               <View>
              <Image style={styles.iconStyle}
                source={require('../assets/icons/icons8-visa.png')} />
              </View>

              <View style={{flex:3, flexDirection:'row',justifyContent: 'space-between'}}>
                <Text style={[styles.loginButtonText, {
                  color: "#1A1A1A", 
                }]}>****1314   08/25</Text>
              <Ionicons name="chevron-down-outline" size={20} color="#1A1A1A" />
              </View>
              </View>
            </TouchableOpacity>
                  
          <TouchableOpacity onPress={() => navigation.navigate("BookAppointmentScreen")}>
              <View style={styles.loginBtn}>
                <Text style={styles.loginButtonText}>Pay Now ($50)</Text>
              </View>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  iconPosition: {
    flex: 1,
  },
  textPosition: {
    flex: 3,
  },
  topTextStyle: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'poppins.semibold',
    color: '#1A1A1A',
  },
  lineBreak: {
    width: wp('100%'),
    borderBottomColor: '#E5E9F0',
    borderBottomWidth: 1,
  },
  serviceTextStyle: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'poppins.semibold',
    color: '#6C6C6C',
    marginLeft: 20,
    marginTop:15
  },
  imageStyle: {
    height: 80,
    width: 80,
    borderRadius: 8,
  },
  serviceContainer: {
    height: 322,
    width: 374,
    borderRadius: 8,
    elevation: 2,
    backgroundColor: '#FFFFFF',
    padding: 8,
    alignSelf: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  textContainer: {
    flex: 3,
  },
  PaymentBtn: {
       backgroundColor: '#FFFFFF',
    padding: 15,
    borderWidth: 1,
    marginTop: hp('2%'),
    borderRadius: 8,
    width: 374,
    alignSelf: 'center',
    borderColor: '#E8E8E8',
    flexDirection: 'row',
    justifyContent:'space-around'
  },
  loginBtn: {
    backgroundColor: '#FD928B',
    padding: 15,
    borderWidth: 1,
    marginTop: hp('2%'),
    borderRadius: 8,
    width: 374,
    alignSelf: 'center',
    borderColor: '#E8E8E8',
  },
  loginButtonText: {
    textAlign: 'center',
    fontFamily: 'poppins.semibold',
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  iconStyle: {
    resizeMode: 'contain',
    width: 28,
    height: 20,
    margin:5
  },
   greyColorText: {
         fontSize: 12,
    fontWeight: "400",
    fontFamily: "poppins.regular",
        color: "#848484",
    },
    pinkColorText: {
        fontSize: 14,
    fontFamily: "poppins.semibold",
        color: "#FD928B",
    },
    blackColorText: {
        fontSize: 16,
    fontFamily: "poppins.medium",
        color: "#1A1A1A",
    },
});
export default Booking2;
