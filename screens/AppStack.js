import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from './Login';
import Registeration from './Registration';
import HomeScreen from './HomeScreen';
import Search1Screen from './Search1Screen';
import BusinessProfile from './BusinessProfile';
import BottomTab from './BottomTab';
import Booking1 from './Booking1';
import Booking2 from './Booking2';
import BookAppointmentScreen from './BookAppointmentScreen';

const Stack = createStackNavigator();


function AppStack(props) {
    return (
        <NavigationContainer>
         <Stack.Navigator headerMode="none" initialRouteName={Login}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Registeration" component={Registeration} />
                <Stack.Screen name="Tabs" component={BottomTab} />
                <Stack.Screen name="Search1Screen" component={Search1Screen} />
                <Stack.Screen name="BusinessProfile" component={BusinessProfile} />
                <Stack.Screen name="Booking1" component={Booking1} />
                <Stack.Screen name="Booking2" component={Booking2} />
                 <Stack.Screen name="BookAppointmentScreen" component={BookAppointmentScreen} />
                
            </Stack.Navigator>
        </NavigationContainer>
        
    );
}



export default AppStack;