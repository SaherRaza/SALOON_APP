
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme, 
  View, 
} from 'react-native';

import AppButton from './components/AppButton';
import Login from './screens/Login';
import Registeration from './screens/Registration';
import MyAppointmentScreen from './screens/MyAppointmentScreen';
import AppStack from './screens/AppStack';
import BusinessProfile from './screens/BusinessProfile';
import TabsScrollableExample from './components/TabsExample';
import HomeScreen from './screens/HomeScreen';
import BottomTab from './screens/BottomTab';
import ProfileTabScreen from './screens/ProfileTabScreen';
import BookAppointmentScreen from './screens/BookAppointmentScreen';
import Booking2 from './screens/Booking2';
import Booking1 from './screens/Booking1';
import SearchSaloon from './screens/SearchSaloon';
import Search1Screen from './screens/Search1Screen';
import Calender from './components/Calender';
import List from './components/List';
import Tab1 from './components/tabs/Tab1';

import Demo from './components/Demo';


const App= () => {
  
  return (
   <AppStack />
  )
};

const styles = StyleSheet.create({

});

export default App;
