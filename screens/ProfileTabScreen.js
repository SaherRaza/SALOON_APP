import {
    View, StyleSheet, Text, TouchableOpacity,
    ScrollView, Switch
} from 'react-native';
import React, {useState} from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


import Ionicons from 'react-native-vector-icons/Ionicons';

function ProfileTabScreen({ navigation }) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
      const [isEnabled1, setIsEnabled1] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    
    return (
        <ScrollView>
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                        <Text style={styles.topTextStyle}>My Profile</Text>
            </View>

            <View style={styles.lineBreak}></View>

                <View style={{margin:10}}>
            <View style={styles.textContainer}>
                <View>
                <View >
                    <View>
                    <Text style={styles.greyColorText}>Name</Text>
                    <Text style={styles.blackColorText}>John Doe</Text>
                    </View>
                </View>
                
                <View style={{marginTop:hp('1%')}}>
                <Text style={styles.greyColorText}>Email Address</Text>
                <Text style={styles.blackColorText}>sample@mail.com</Text>
                </View>
                <View style={{marginTop:hp('1%')}}>
                    <Text style={styles.greyColorText}>Mobile Number</Text>
                    <Text style={styles.blackColorText}>2-(596)545-0394</Text>
                </View>
                <View style={{marginTop:hp('1.5%')}}>
                    <Text style={styles.greyColorText}>Address</Text>
                    <Text style={styles.blackColorText}>6 Lukken</Text>
                    <Text style={styles.blackColorText}>Ridgecrest</Text>
                    <Text style={styles.blackColorText}>NH</Text>
                    <Text style={styles.blackColorText}>72960-7510</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity>
                    <Text style={styles.pinkColorText}>Edit</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style={styles.PasswordContainer}>
                <View>
                    <Text style={styles.blackColorText}>Change Password</Text>
                </View>
                <View>
                    <TouchableOpacity>
                    <Ionicons name="chevron-forward-outline" size={20} color="#1A1A1A"  />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.PasswordContainer}>
                <View>
                    <Text style={styles.blackColorText}>Change attached payment</Text>
                </View>
                <View>
                    <TouchableOpacity>
                    <Ionicons name="chevron-forward-outline" size={20} color="#1A1A1A"  />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.PasswordContainer}>
                <View>
                    <Text style={styles.blackColorText}>Accept Marketing via Email</Text>
                </View>
                <View>
                        <Switch
                    trackColor={{ false: "#D8D8D8", true: "#D8D8D8" }}
        thumbColor={isEnabled1 ? "#FFFFFF" : "#f4f3f4"}
      //  ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
                        />
                </View>
            </View>

            <View style={styles.PasswordContainer}>
                <View>
                    <Text style={styles.blackColorText}>Accept Marketing via</Text>
                </View>
                <View>
                        <Switch
                    trackColor={{ false: "#D8D8D8", true: "#D8D8D8" }}
        thumbColor={isEnabled1 ? "#FFFFFF" : "#f4f3f4"}
       // ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch1}
                            value={isEnabled1}
                        />
                </View>
            </View>

            
               </View>
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
        elevation: 2,
       justifyContent: "center",
       alignItems:"center", 
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
    },
    textContainer: {
        width: 374,
        height: 349,
        borderRadius: 8,
        backgroundColor: "#FFFFFF",
        elevation: 2.5,
        alignSelf: 'center',
        marginTop: 20,
        padding: 20,
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    nameTextPosition: {
        flexDirection: 'row',
        padding: 15,
        justifyContent:'space-between',
    },
    greyColorText: {
         fontSize: 14,
    fontWeight: "800",
    fontFamily: "poppins.medium",
        color: "#848484",
    },
    pinkColorText: {
        fontSize: 14,
    fontFamily: "poppins.semibold",
        color: "#FD928B",
    },
    blackColorText: {
        fontSize: 14,
    fontFamily: "poppins.medium",
        color: "#020D18",
    },
    PasswordContainer: {
         width: 374,
        height: 60,
        borderRadius: 8,
        backgroundColor: "#FFFFFF",
        elevation: 2.5,
        alignSelf: 'center',
        marginTop: hp('2%'),
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    }
})

export default ProfileTabScreen;