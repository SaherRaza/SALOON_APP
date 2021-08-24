import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Data = [
  {
    id: 1,
    imageSource: require('../assets/image3.png'),
    saloonName: 'Royal Beauty Saloon',
    handleBy: 'Marshall',
    Date: '02 Wed, Feb',
    Time: '11:00 AM',
    service1: 'Regular Haircut',
    service2: 'Hair Coloring',
    TimeDuration: '30 mins',
  },
  // {
  //   id: 2,
  //    imageSource: require("../assets/image4.png"),
  //   saloonName: "Royal Beauty Saloon",
  //   handleBy: "Marshall",
  //   Date: "02 Wed, Feb",
  //   Time: "11:00 AM",
  //   service1: "Regular Haircut",
  //   service2: "Hair Coloring",
  //   TimeDuration: "30 mins"

  // },
];

function Upcoming(props) {
  const [ViewDetails, setViewDetails] = useState('none');

  const onClick = () => {
    if (ViewDetails === 'none') {
      setViewDetails("flex");
    }
    else {
      setViewDetails('none');
    }
  };

  return (
  
            <View style={styles.upcomingMainContainer}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={require('../assets/image4.png')}
                />

                <View style={styles.textContainer}>
                  <Text style={styles.saloonText}>Royal Beauty Saloon</Text>

                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.greyColorText}>Handling by </Text>
                    <Text style={styles.boldText}>Marshall</Text>
                  </View>

                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.greyColorText}>On </Text>
                    <Text style={styles.boldText}>
                      02 Wed, Feb .
                      <Text>11:00 A.M</Text>
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.lineBreak}></View>

              <TouchableWithoutFeedback onPress={onClick}>
                <View style={styles.viewDetailContainer}>
                  <Text style={styles.greyColorText}>View Details</Text>

                  <Ionicons
                    style={{right: 25}}
                    name="chevron-down-outline"
                    color="#848484"
                    size={20}
                  />
                </View>
              </TouchableWithoutFeedback>

              <View
                style={{
                  width: 374,
                  padding: 20,
                  top: 12,
                  borderRadius: 8,
                  elevation: 5,
          backgroundColor: '#FFFFFF',
                  display: ViewDetails
        }}>
        <Text style={[styles.greyColorText, {fontSize:16}]}>Services</Text>
        <View style={styles.HairTextContainer}>
        <View>
          <Text style={styles.boldText}>Regular Haircut</Text>
          <Text style={styles.greyColorText}>30 minutes</Text>
        </View>
          <View><Text style={styles.boldText}>$15</Text></View>
        </View>
        <View style={styles.lineBreak1}></View>

      
        <View style={styles.HairTextContainer}>
         <View>
            <Text style={styles.boldText}>Hair Coloring</Text>
          <Text style={styles.greyColorText}>50-60 minutes</Text>
          </View>
          
          <View><Text style={styles.boldText}>$40</Text></View>

        </View>

        <TouchableOpacity onPress={()=>console.log("pressed")}
           style={styles.buttonContainer}>
          <Text style={styles.buttonText}>
            Cancel Booking
          </Text>
          </TouchableOpacity>
          
          
      </View>
      
            </View>
          );
      
}

const styles = StyleSheet.create({
  upcomingMainContainer: {
    backgroundColor: '#FFFFFF',
    width: 374,
    borderRadius: 8,
    borderWidth: 1,
    elevation: 1,
    borderColor: '#F3F3F3',
    alignSelf: 'center',
    marginVertical: hp('1%'),
    height:147
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    margin: 15,
  },
  textContainer: {
    top: 15,
  },
  saloonText: {
    fontFamily: 'poppins.regular',
    fontWeight: '500',
    color: '#1A1A1A',
    fontSize: 16,
  },
  boldText: {
    fontFamily: 'poppins.semibold',
    color: '#1A1A1A',
    fontSize: 14,
    fontWeight: '500',
  },
  lineBreak: {
    width: 374,
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
  },
    lineBreak1: {
    width: 340,
    borderBottomColor: '#E8E8E8',
      borderBottomWidth: 1,
   alignSelf:'center', marginTop:10
  },
  greyColorText: {
    color: '#848484',
    fontSize: 14,
    fontFamily: 'poppins.regular',
    fontWeight: '400',
  },
  viewDetailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: 15,
    top: 8,
  },
  HairTextContainer:{
          flexDirection: "row", justifyContent: 'space-between',
    alignItems: 'center', marginTop: hp('1%')
  },
  buttonContainer:{
    padding: 15, borderColor: "#E5E5E5", backgroundColor:"#FFFFFF",
    marginTop: hp('3%'), borderRadius: 8,
    width:344, alignSelf:'center', borderWidth:1
  },
  buttonText: {
    color: "#AEAEAE",
    textAlign: 'center',
    fontFamily: "poppins.semibold",
    fontSize: 16,
    fontWeight:"600"
  }
});

export default Upcoming;
