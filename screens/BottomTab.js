import React from 'react';
import {
  View, StyleSheet, Text, Image
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import MyAppointmentScreen from './MyAppointmentScreen';
import ProfileTabScreen from './ProfileTabScreen';


import { NavigationContainer } from '@react-navigation/native';
const Tab = createBottomTabNavigator();

function BottomTab(props) {
  return (
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            height: 80,
            width: '100%',
            backgroundColor: "#FFFFFF",
            elevation: 2,

          }
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.iconsAlignment}>
                <Image
                  source={require('../assets/icons/home.png')}
                  resizeMode='contain'
                  style={{
                    height: 20,
                    width: 20,
                    tintColor: focused ?  "#FD928B" : "#C5C5C5"
                  }}
                />
              </View>
            )
          }}
          name="Home" component={HomeScreen} />
        <Tab.Screen name="Appointments" component={MyAppointmentScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.iconsAlignment}>
                <Image
                  source={require('../assets/icons/calendar.png')}
                  resizeMode='contain'
                  style={{
                    height: 20,
                    width: 20,
                    tintColor: focused ?  "#FD928B" : "#C5C5C5"
                  }}
                />
              </View>
            )
          }}
                />
        <Tab.Screen name="Profile" component={ProfileTabScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.iconsAlignment}>
                <Image
                  source={require('../assets/icons/user.png')}
                  resizeMode='contain'
                  style={{
                    height: 20,
                    width: 20,
                    tintColor: focused ?  "#FD928B" : "#C5C5C5"
                  }}
                />
              </View>
            )
          }}
                />
      </Tab.Navigator>
  );

}

const styles = StyleSheet.create({
  iconsAlignment: {
    alignItems: "center",
    justifyContent: "center",
    margin:10
    }
})

export default BottomTab;