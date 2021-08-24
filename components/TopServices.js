import React from 'react';
import { View, FlatList, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const topServices = [
    {
        id: 1,
        serviceName: "Beauty",
        imageSource: require("../assets/salon.png"),
    },
     {
        id: 2,
        serviceName: "Hair",
        imageSource: require("../assets/hairdess.png"),
    },
      {
        id: 3,
        imageSource: require("../assets/nail.png"),
        serviceName: "Nails"
    },
       {
        id: 4,
        imageSource: require("../assets/spa.png"),
        serviceName: "Spa"
  },
  {
    id: 5,
    imageSource: require("../assets/spa.png"),
    serviceName: "Manicure"
  }
]


function TopServices(props) {
    return (
        <View>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
      data={topServices}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity>

          <View style={styles.Container}>

            <View style={styles.cardContainer}>
              <Image
                style={styles.image}
                resizeMode="cover"
                source={item.imageSource}
              />

              <View style={styles.textContainer}>
                <Text style={styles.serviceNameStyle}>{item.serviceName}</Text>
              </View>
            </View>
          </View>
          </TouchableOpacity>
        );
      }}
      />
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
      margin:5,   
        width: 80,
        height: 80,
        backgroundColor: "#FFFFFF",
    borderRadius: 8, elevation: 2,

       
        
  },
  image: {
    width: 20.83,
      height: 25,
      alignSelf: 'center',
      margin:10
    },
    serviceNameStyle: {
        color: "#848484",
         fontSize: 13,
    fontWeight: "400",
        fontFamily: "poppins.regular",
    textAlign:"center"
  }
})
export default TopServices;