import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  FlatList,
  Platform,
  Dimensions,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,

} from 'react-native';
import colors from '../colors/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


import Ionicons from 'react-native-vector-icons/Ionicons';
import ServiceCard from './ServiceCard';
import {ScrollView} from 'react-native-gesture-handler';

import {Calendar} from 'react-native-calendars';
const width = Dimensions.get('screen').width;


const timedata = [
  {
    key: '1',
    time: '11.00 AM',
  },

  {
    key: '2',
    time: '02.00 AM',
  },

  {
    key: '3',
    time: '05.30 AM',
  },
];

const initialDate = '2021-02-02';

export default function Calender({navigation}) {


  //For single item selected
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [selectedItemMember, setSelectedItemMember] = React.useState(null);

  const onPressHandler = key => {
    setSelectedItem(key);
  };

  const onPressHandlerMember= key => {
  setSelectedItemMember(key)
  };

  

  //remove Services
  const removeItem = key => {
    setfData(fdata.slice().filter(item => item.key !== key));
  };

  const ItemSeparator = () => (
    <View
      style={{
        height: 1,
        backgroundColor: colors.seprator,
        width: wp('88%'),
        alignSelf: 'center',
      }}
    />
  );

  const [selected, setSelected] = useState(initialDate);
  const markedDates = {
    [selected]: {
      customStyles: {
        container: {
          backgroundColor: colors.white,
          borderWidth: 1,
          borderColor: colors.primary,
          borderRadius: 8,

         justifyContent:'center',
         alignItems:'center'
        },
        text: {
          color: 'black',
          fontFamily: 'poppins.regular',
          fontSize: 18,
          fontWeight: '400',
        },
      },
    },
  };

  const onDayPress = day => {
    setSelected(day.dateString);
  };

  return (
    <SafeAreaView style={styles.container}>
    

        <View>
          <Text style={styles.services}>Select a date</Text>

          <View>
            <Calendar
              style={styles.calendarCoontainer}
              markedDates={markedDates}
              markingType={'custom'}
              current={initialDate}
              pastScrollRange={24}
              futureScrollRange={24}
              hideExtraDays={true}
              horizontal
              firstDay={1}
              hideArrows={false}
              renderArrow={direction =>
                direction === 'left' ? (
                  <Image
                    style={styles.arrow}
                    source={require('../assets/icons/back2.png')}
                  />
                ) : (
                  <Image
                    style={styles.arrow}
                    source={require('../assets/icons/rightarrow.png')}
                  />
                )
              }
              pagingEnabled
              //    customHeader={CustomHeader}
              onDayPress={onDayPress}
              theme={{
                selectedDayBackgroundColor: '#00adf5',
                selectedDayTextColor: 'red',
                arrowColor: '#000',
                arrowStyle: {padding: 0},
                monthTextColor: colors.black,
                textMonthFontSize: 17,
                textMonthFontFamily: 'poppins.medium',
                calendarBackground: colors.white,
                textSectionTitleColor: 'black',
                textSectionTitleDisabledColor: 'gray',
                dayTextColor: colors.black,
                todayTextColor: 'white',
                selectedDayTextColor: 'white',
                monthTextColor: colors.black,
                selectedDayBackgroundColor: '#000',
                textDayFontSize: 18,
                textDayFontFamily: 'poppins.regular',

                // textDisabledColor: 'red',
              }}
            />
          </View>
        </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  services: {
    fontFamily: 'poppins.medium',
    fontSize: 16,
    fontWeight: '500',
    color: colors.appointmentscreenService,
    letterSpacing: 0,
    paddingHorizontal: 20,
  },

  customHeader: {
    width: wp('100%'),
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: 'red',
    backgroundColor: '#fff',
    alignSelf: 'center',
  },

  arrow: {
    width: 10,
    height: 15,
  },

  calendarCoontainer: {
    elevation: 5,
    width: wp('90%'),
    alignSelf: 'center',
    borderRadius: 8,
    marginTop: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  timeSlot: {
    width: 87,
    height: 40,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginLeft: 20,
  },

  time: {
    fontFamily: 'poppins.medium',
    fontSize: 14,
    color: colors.secondry,
    letterSpacing: 0,
    fontWeight: '500',
  },

  timeSlotContainer: {
    flexDirection: 'row',
    marginTop: 12,
    justifyContent: 'space-between',
    
  },

 
});