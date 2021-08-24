import React, {Component} from "react";
import { useState } from "react";
import {
    View, SafeAreaView, TouchableOpacity,
    StyleSheet, ScrollView, Text
} from "react-native";
import { SliderBox } from "react-native-image-slider-box";

import TabsExample from '../components/TabsExample';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import CardList from "../components/CardList";

import Ionicons from "react-native-vector-icons/Ionicons";

function BusinessProfile({navigation}) {
  const [images, setImages] = useState([
    require("../assets/image4.png"),
    require("../assets/image3.png"),
    require("../assets/image4.png"),
    require("../assets/image3.png"),
  ]);

  
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <SliderBox
            images={images}
            sliderBoxHeight={250}
            // autoplay
            // circleLoop
            dotColor="#FFFFFF"
            inactiveDotColor="rgba(255,255,255,0.50)"
            dotStyle={{
              width: 8,
              height: 8,
              borderRadius: 8,
              marginHorizontal: -5,
              padding: 0,
              margin: 0,
            }}
                  />
          <TouchableOpacity onPress={() => navigation.goBack()}
          style={styles.iconLeft} >
          <Ionicons name="chevron-back-outline" size={24} color="#1A1A1A" />
          </TouchableOpacity>
          
              </View>
              
              <View style={styles.textContainer}>
                  <Text style={styles.mainTextStyle}>Royal Beauty Saloon</Text>
                  <View style={{ flexDirection: "row" }}>
                      <TouchableOpacity>
                          <Ionicons name="location-outline" size={20} color="#848484" />
                          </TouchableOpacity>
                      <Text style={styles.subTitle}>42, York Street, Colombo</Text>
                  </View>
                  <View style={{flexDirection:"row"}}>
                  <Text style={styles.subTitle1}>4.9</Text>
                  <Ionicons name="star" size={20} color="#FDC83C" />
                      <Text style={styles.subTitle2}>(314 Reviews)</Text>
                      </View>
              </View>

        <View>
           <TabsExample />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Booking1")}>
              <View style={styles.loginBtn}>
                <Text style={styles.loginButtonText}>Book Now</Text>
              </View>
            </TouchableOpacity>

        <View style={styles.AboutUsContainer}>
          <Text style={styles.titleText}>About Us</Text>
          <Text style={styles.paragraphText}>
            I have in the past work for many an app development project which required extensive detailing. And, you can have a look at my portfolio to know more. 
          </Text>
          <Text style={styles.titleText}>Contact Us</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity >
            <Ionicons name="call-outline" size={20} color="#848484" />
            </TouchableOpacity>
            <Text style={[styles.paragraphText, { marginHorizontal: 5 }]}>912-821-3847</Text>
          </View>
          <View style={styles.lineBreak}></View>
          <View style={{ flexDirection: "row", marginTop:hp('1.5%') }}>
            <TouchableOpacity>
           <Ionicons name="location-outline" size={20} color="#848484" />
            </TouchableOpacity>
            <Text style={[styles.paragraphText, { marginHorizontal: 5 }]}>42, York Street, Colombo</Text>
          </View>
          <TouchableOpacity>
          <Text style={styles.directionsText}>Directions</Text>
          </TouchableOpacity>
          
        </View>
       
        <View>
        <CardList />
        </View>
        

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  iconLeft: {
    backgroundColor: "#FFFFFF",
    width: 35,
    height: 35,
    borderRadius: 360,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
      marginTop: 25,
    position:"absolute"
    },
    textContainer: {
      margin: 20, 
    },
    mainTextStyle: {
        color: "#1A1A1A",
        fontSize: 20,
        fontFamily: "poppins.semibold",
        fontWeight:"600"
    },
    subTitle: {
        color: "#848484",
        fontFamily: 'poppins.regular',
        fontSize: 14,
        fontWeight:"400"
    },
    subTitle1: {
        color: "#1A1A1A",
        fontSize: 14,
        fontFamily: "poppins.regular",
        fontWeight: "400",
        marginHorizontal:5
    },
    subTitle2: {
        color: "#848484",
        fontSize: 14,
        fontWeight: "200",
      marginHorizontal: 5,
        fontFamily: 'poppins.regular'
  },
  AboutUsContainer: {
    padding: 18,
    margin: 20,
    height: hp('40%'),
    elevation: 2,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    
  },
  titleText: {
    color: "#1A1A1A",
    fontSize: 16,
    fontWeight: "600",
    fontFamily:'poppins.semibold'
    
  },
  paragraphText: {
    color: "#1A1A1A",
    fontSize: 14,
    fontFamily: "poppins.regular",
    fontWeight: "800",
    textAlign: "left",
    paddingBottom: 5,
  
  },
  lineBreak: {
    width: wp('75%'),
    borderBottomColor: '#293340',
    borderBottomWidth: 1,
    alignSelf: "flex-end",
    marginTop:hp('.5%')
  },
  directionsText: {
    color: "#426ED9",
     fontSize: 13,
    fontFamily: "poppins.semibold",
    marginLeft: wp('6.5'),
    marginTop:hp('2%')
  },
 loginBtn: {
    backgroundColor: '#FD928B',
    padding: 15,
    borderWidth: 1,
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
});
export default BusinessProfile;
