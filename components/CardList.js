import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import FilledStars from "./FilledStars";

const MenuList = [

  {
    id: 1,
    Name: "Faris",
    Intro: "I am a professional Mobile App Developer with lot of experience in React Native design. ",
    rating: "5.0",
    date:"20 Aug 2020",
    imageSource: require("../assets/people.jpg"),
  },
  {
    id: 2,
     Name: "Azlaan",
    Intro: "I am a professional Mobile App Developer with lot of experience in React Native design.  ",
    rating: "5.0",
    date:"20 Aug 2020",
    imageSource: require("../assets/people.jpg"),
  },
  {
    id: 3,
     Name: "Haider",
    Intro: "I am a professional Mobile App Developer with lot of experience in React Native design." ,
    rating: "5.0",
    date:"20 Aug 2020",
    imageSource: require("../assets/people.jpg"),
  },

];
function CardList(props) {

  return (
    <View style={styles.peopleContainer}>
          <Text style={styles.NameStyle}>What people says</Text>
  
    <FlatList
      data={MenuList}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => {
        return (
          <View style={styles.Container}>

            <View style={styles.cardContainer}>
              <Image
                style={styles.image}
                resizeMode="cover"
                source={item.imageSource}
              />

              <View style={styles.textContainer}>
                <Text style={styles.NameStyle}>{item.Name}</Text>
                <Text style={styles.IntroStyle}>{item.Intro}</Text>
                <View style={{ flexDirection: "row" }}>
                  <View style={{alignSelf:"center"}}>
                <FilledStars />
                  </View>
                <Text style={styles.ratingStyle}>{item.rating}</Text>
                <Text style={styles.dateStyle}>{item.date}</Text>
                </View>
                
              </View>
            </View>
          </View>
        );
      }}
      />

      <TouchableOpacity>
        <Text style={styles.reviewsTextStyle}>
          View All User Reviews
        </Text>
      </TouchableOpacity>
      
        </View>
  );
}

const styles = StyleSheet.create({
    peopleContainer: {
    padding: 18,
    margin: 20,
    height: hp('70%'),
    elevation: 2,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
  },
  textContainer: {
    marginLeft:15, flex:1
  },
  cardContainer: {
    flexDirection: "row",
    marginTop:20
  },
  image: {
    width: 42,
    height: 42,
    borderRadius: 360,
    padding:15
  },
  NameStyle: {
    color: "#1A1A1A",
    fontSize: 16,
    fontWeight: "600",
    fontFamily:'poppins.semibold'
    
  },
  IntroStyle: {
    color: "#1A1A1A",
    fontSize: 14,
    fontFamily: "poppins.regular",
    fontWeight: "800",
    textAlign: "left",

  },
  ratingStyle: {
    marginHorizontal: 5,
    fontFamily: "poppins.semibold",
    fontSize: 14,
    textAlign:"center"
  },
  dateStyle: {
    color: "#848484",
    fontSize: 14,
    fontFamily: "poppins.regular",
    fontWeight: "500",
    textAlign: "right",
    alignSelf:"center",
    marginHorizontal: 5,
  },
  reviewsTextStyle: {
    textAlign: "center",
    color: "#FD928B",
    fontSize: 14,
    fontFamily: "poppins.semibold",
    fontWeight: "500",
  }
});

export default CardList;
