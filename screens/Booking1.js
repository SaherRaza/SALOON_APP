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
import Calender from '../components/Calender';

const peopleProfiles = [
    {
        id: 1,
        Name: "Marshall",
        imageSource: require("../assets/people.jpg"),
    },
    {
        id: 2,
        Name: "Tipene",
        imageSource: require("../assets/people.jpg"),
    },
    {
        id: 3,
        Name: "Justin",
        imageSource: require("../assets/people.jpg"),
    },
    {
        id: 4,
        Name: "Edward",
        imageSource: require("../assets/people.jpg"),
    },
]

function Booking1({navigation}) {
    return (
        <ScrollView>

            <View style={styles.mainContainer}>
                <View style={styles.headerContainer}>
                    <View style={styles.iconPosition}>
                        <TouchableOpacity onPress={() => navigation.goBack()}
                            style={{ marginLeft: 20 }}>
                            <Ionicons name="chevron-back" size={24} color="#1A1A1A" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.textPosition}>
                        <Text style={styles.topTextStyle}>Create Appointment</Text>
                    </View>
                </View>
                <View style={styles.lineBreak}></View>
            </View>




            <Text style={styles.greyColorStyle}>Services</Text>
            <View style={styles.serviceContainer}>
                <View style={styles.service1}>
                    <View>
                        <Text style={styles.regularTextStyle}>Regular Haircut</Text>
                        <Text style={styles.timeTextStyle}>30 minutes . $15</Text>
                    </View>
                    <TouchableOpacity style={{ alignSelf: 'center' }}>
                        <Ionicons name="trash-outline" size={15} color="#CECECE" />
                    </TouchableOpacity>

                </View>
                <View style={[styles.lineBreak, { width: 374 }]}></View>

                <View style={styles.service2}>
                    <View>
                        <Text style={styles.regularTextStyle}>Hair Coloring</Text>
                        <Text style={styles.timeTextStyle}>50-60 minutes . $40</Text>
                    </View>
                    <TouchableOpacity style={{ alignSelf: 'center' }}>
                        <Ionicons name="trash-outline" size={15} color="#CECECE" />
                    </TouchableOpacity>
                </View>
            </View>


            <View>
                <Calender />
            </View>

            <View>
                <View>
                    <Text style={styles.greyColorStyle}>Pick a timeslot</Text>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                    <View style={styles.timeContainer}>
                        <Text style={styles.smallgreycolorText}>11:00 AM</Text>
                    </View>
                    <View style={styles.timeContainer}>
                        <Text style={styles.smallgreycolorText}>2:00 PM</Text>
                    </View>
                    <View style={styles.timeContainer}>
                        <Text style={styles.smallgreycolorText}>05:40 AM</Text>
                    </View>
                </View>
            </View>

            <View>
                <Text style={styles.greyColorStyle}>Choose a member</Text>
                <View>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={peopleProfiles}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity style={styles.cardContainer}>
                                        <Image
                                            style={styles.image}
                                            resizeMode="cover"
                                            source={item.imageSource}
                                        />

                                        <View style={styles.textContainer}>
                                        <Text style={styles.smallgreycolorText}>{item.Name}</Text>
                                        </View>
                                    </TouchableOpacity>
                            );
                        }}
                    />
                </View>
            </View>
            <Text style={styles.greyColorStyle}>Personal Details</Text>
            
            <View style={styles.personalDetailsContainer}>
                <Text style={styles.textStyle}>John Doe</Text>
                <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Sample@mail.com"
                placeholderTextColor="#020D18"
                fontFamily="poppins.regular"
              />
              </View>
                <Text style={styles.textStyle}>Email Address</Text>
                 <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Johndoe@mail.com"
                placeholderTextColor="#020D18"
                fontFamily="poppins.regular"
              />
              </View>
                <Text style={styles.textStyle}>Mobile Number</Text>
                 <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="093-8492-43892"
                placeholderTextColor="#020D18"
                fontFamily="poppins.regular"
              />
              </View>
                
            </View>

            <View style={[styles.lineBreak, {marginTop:10}]}></View>

            <TouchableOpacity onPress={() => navigation.navigate("Booking2")}>
              <View style={styles.loginBtn}>
                <Text style={styles.loginButtonText}>Confirm Booking ($55)</Text>
              </View>
            </TouchableOpacity>


            <View>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#FFFFFF",
    },
    headerContainer: {
        flexDirection: 'row',
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2
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
        color: "#1A1A1A",
    },
    lineBreak: {
        width: wp('100%'),
        borderBottomColor: '#E5E9F0',
        borderBottomWidth: 1,
        alignSelf: 'center'
    },
    greyColorStyle: {
        fontSize: 18,
        fontWeight: "600",
        fontFamily: "poppins.medium",
        color: "#6C6C6C",
        marginLeft: 20,
        marginTop:10
        
    },
    serviceContainer: {
        width: 374,
        height: 123,
        borderRadius: 10,
        backgroundColor: "#F3F3F3", 
        alignSelf: 'center', 
        
    },
    service1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    service2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:5

    },
    regularTextStyle: {
        fontSize: 14,
        fontWeight: "500",
        fontFamily: "poppins.medium",
        color: "#1A1A1A",
    },
    timeTextStyle: {
        fontSize: 12,
        fontWeight: "500",
        fontFamily: "poppins.regular",
        color: "#848484",
    },
    timeContainer: {
        width: 87,
        height: 40,
        borderRadius: 8,
        backgroundColor: "#FFFFFF",
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
        marginHorizontal: 5

    },


    cardContainer: {
        padding: 20,
        width: 100,
        borderRadius: 8,
        elevation: 2,
        backgroundColor: "#FFFFFF",
        marginLeft: 20,
        marginTop: 5,
        margin:2
        
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 360,
        backgroundColor: "orange",
        
    },
    smallgreycolorText: {
        fontSize: 14,
        fontWeight: "600",
        fontFamily: "poppins.medium",
        color: "#6C6C6C",
        textAlign: 'center',
        width: 100,
        alignSelf: 'center',
        marginTop:5
    },
    personalDetailsContainer: {
        height: 313,
        borderRadius: 8,
        elevation: 2,
        margin: 10,
        backgroundColor: "#FFFFFF",
        width: 374,
        alignSelf:"center"
    },
    textInputContainer: {
    flexDirection: 'row',
    width: 344,
    padding:5,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
        borderRadius: 8, marginTop: 5,
        borderColor: "#E5E9F0",
    borderWidth:1
  },
  textInput: {
    fontWeight: '400',
    fontSize: 14,
    flex: 1,
    textAlign: 'left',
    },
    textStyle: {
        marginLeft: 15,
        marginTop:10,
        fontSize: 14,
        fontWeight: "600",
        fontFamily: "poppins.regular",
        color: "#000000",
    },
     loginBtn: {
    backgroundColor: '#FD928B',
    padding: 15,
    borderWidth: 1,
    margin:10,
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
})

export default Booking1;