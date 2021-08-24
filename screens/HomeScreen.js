import React from 'react';
import {
  View, StyleSheet, Text, TextInput,
  FlatList, TouchableOpacity, Image,
  ScrollView
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import TopServices from '../components/TopServices';

const NearYou = [
  {
    id: 1,
    saloonName: "Saloon Zero",
    services: "Hair dresser, Nails art, Salon",
    rating:"4.9",
    imageSource: require("../assets/image3.png"),
  },
  {
    id: 2,
    saloonName: "Nail and Hair",
    services: "Hair dresser, Salon",
    rating:"5",
    imageSource: require("../assets/hair1.png"),
  },
  {
    id: 3,
    saloonName: "Makeup and hair",
    services: "Hair dresser, Nails art",
    rating:"4.7",
    imageSource: require("../assets/hair1.png"),
  },
]

const BasedOnYourSearch = [
  {
    id: 1,
    saloonName: "The Nail Shop",
    services: "Hair dresser, Nails art, Salon",
    rating:"4.9",
    imageSource: require("../assets/image3.png"),
  },
  {
    id: 2,
    saloonName: "Nail and Hair",
    services: "Hair dresser, Salon",
    rating:"5",
    imageSource: require("../assets/hair1.png"),
  },
  {
    id: 3,
    saloonName: "Makeup and hair",
    services: "Hair dresser, Nails art",
    rating:"4.7",
    imageSource: require("../assets/hair1.png"),
  },
]

function HomeScreen({ navigation }) {

  const onClick = () => {
    navigation.navigate('Search1Screen');
  }
  return (
      <ScrollView style={{
    backgroundColor:"#FFFFFF"}}>
      <View style={styles.mainContainer}>
        
          <View style={styles.topTextContainer}>
        <Text style={styles.helloTextStyle}>Hello,</Text>
        <Text style={styles.NameStyle}>Jessica</Text>
        </View>
        <Text style={styles.titleStyle}>What are you looking for?</Text>
       

        
        <View style={styles.textInputContainer}>
          <Ionicons style={{paddingLeft:10}}
            name="search-outline" size={20} color="#000000" />
              <TextInput onFocus={onClick}
                style={styles.textInput}
                placeholder="Search here..."
                placeholderTextColor="#020D18"
                fontFamily="poppins.regular"
              />
        </View>
        
        <View style={{ marginTop:20}}>
        <Text style={styles.boldTextStyle}>Top Services</Text>
        </View>
        
        <View>
        <TopServices />
        </View>

        <View style={styles.textAlignment}>
          <Text style={styles.boldTextStyle}>Near you</Text>
          <TouchableOpacity>
          <Text style={styles.viewAllTextStyle}>View All</Text>
          </TouchableOpacity>
        </View>

        <View>
            <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
      data={NearYou}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity onPress={()=> navigation.navigate('BusinessProfile')}>
              <View style={styles.Container}>

            <View style={styles.cardContainer}>
              <Image
                style={styles.image}
                resizeMode="cover"
                source={item.imageSource}
              />

              <View style={styles.textContainer}>
                <View style={styles.subTextContainer}>
                  <Text style={styles.saloonNameStyle}>{item.saloonName}</Text>
                  <View style={{flexDirection:'row'}}>

                <TouchableOpacity>
                  <Ionicons name="star" size={17} color="#FDC83C"  />
                </TouchableOpacity>
                <Text style={styles.ratingText}>{item.rating}</Text>
                  </View>
                </View>
                <Text style={styles.servicesTextStyle}>{item.services}</Text>
                
              </View>
            </View>
          </View>
            </TouchableOpacity>

        );
      }}
      />
        </View>

        <View style={styles.textAlignment}>
          <Text style={styles.boldTextStyle}>Based on Your Search</Text>
          <TouchableOpacity>
          <Text style={styles.viewAllTextStyle}>View All</Text>
          </TouchableOpacity>
        </View>

        <View>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
      data={BasedOnYourSearch}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity onPress={()=> navigation.navigate('BusinessProfile')}>
          <View style={styles.Container}>

            <View style={styles.cardContainer}>
              <Image
                style={styles.image}
                resizeMode="cover"
                source={item.imageSource}
              />

              <View style={styles.textContainer}>
                <View style={styles.subTextContainer}>
                  <Text style={styles.saloonNameStyle}>{item.saloonName}</Text>
                  <View style={{flexDirection:'row'}}>

                <TouchableOpacity>
                  <Ionicons name="star" size={17} color="#FD928B"  />
                </TouchableOpacity>
                <Text style={styles.ratingText}>{item.rating}</Text>
                  </View>
                </View>
                <Text style={styles.servicesTextStyle}>{item.services}</Text>
                
              </View>
            </View>
          </View>
          </TouchableOpacity>
        );
      }}
      />
        </View>
        
      </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginLeft: 20
  },
  topTextContainer: {
    flexDirection: "row", marginTop: hp('2%'),
    
  },
  helloTextStyle: {
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "poppins.regular",
    color:"#1A1A1A"
  },
  NameStyle: {
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "poppins.semibold",
    color: "#FD928B",
    marginHorizontal:5
  },
  titleStyle: {
     fontSize: 22,
    fontWeight: "400",
    fontFamily: "poppins.semibold",
    color: "#1A1A1A",
  },
   textInputContainer: {
    flexDirection: 'row',
     width: wp('90%'),
    height:50,
     alignItems: 'center',
    backgroundColor: '#F3F3F6',
     borderRadius: 8,
     marginTop: hp('1%'),
    
  },
  textInput: {
    fontWeight: '400',
    fontSize: 14,
    flex: 1,
    textAlign: 'left',
  },
  boldTextStyle: {
     fontSize: 16,
    fontWeight: "600",
    fontFamily: "poppins.semibold",
    color: "#1A1A1A",
  },
  textAlignment: {
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop: hp('2%'),
  },
  viewAllTextStyle: {
      fontSize: 14,
    fontFamily: "poppins.semibold",
    color: "#FD928B",
    right:20
  },
  image: {
    width: 300,
    height: 138,
    borderTopLeftRadius: 8,
    borderTopRightRadius:8
  },
  cardContainer: {
         margin:5,
        width: 300,
        height: 210,
        backgroundColor: "#FFFFFF",
    borderRadius: 8,
    elevation: 2,
 },
  textContainer: {
    padding:12
  },
  subTextContainer:
  {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  saloonNameStyle: {
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "poppins.semibold",
    color: "#1A1A1A",
  },
  ratingText: {
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "poppins.regular",
    color: "#1A1A1A",
  },
  servicesTextStyle: {
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "poppins.regular",
    color: "#848484",
  }
  
})

export default HomeScreen;