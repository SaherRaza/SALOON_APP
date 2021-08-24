import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Upcoming from '../components/Upcoming';
import colors from '../colors/colors';

function MyAppointmentScreen(props) {
  const [selected, setSelected] = useState(0);

  const [colorP, setColorP] = useState(colors.white);
  const [colorE, setColorE] = useState(colors.primary);
  const [textColor1, setTextColor1] = React.useState(colors.primary);
  const [textColor2, setTextColor2] = React.useState(colors.secondry);

  const onpresstab1 = () => {
    setSelected(0);
    setColorE(colors.primary);
    setColorP('#fff');
    setTextColor1(colors.primary);
    setTextColor2(colors.secondry);
    };


  const onpresstab2 = () => {
    //fot  tab1
    setSelected(1);
    setColorE('#fff');
    setColorP(colors.primary);
    setTextColor1(colors.secondry);
    setTextColor2(colors.primary);
    };

  
  return (
    <View>
      <View>
        <Text style={styles.topText}>My Appointment</Text>
      </View>

      <View style={styles.segmentContainer}>
        <TouchableWithoutFeedback onPress={onpresstab1}>
          <View
            style={{
              borderBottomWidth: 2,
              borderColor: colorE,
              width: 100,
              borderRadius: 1,
            }}>
            <Text style={{...styles.segmentText, color: textColor1}}>
              Upcoming
            </Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={onpresstab2}>
          <View
            style={{
              borderBottomWidth: 2,
              borderColor: colorP,
              width: 100,
              borderRadius: 1,
            }}>
            <Text style={{...styles.segmentText, color: textColor2}}>
              Previous
            </Text>
          </View>
        </TouchableWithoutFeedback>
          </View>
          
          {
              selected === 0 ? <Upcoming />  : <View><Text>world</Text></View>
          }

        
        

    </View>
  );
}
const styles = StyleSheet.create({
    topText: {
    fontSize: 18,
    fontFamily: 'poppins.semibold',
    textAlign: 'center',
    fontWeight: '600',
    color: '#1A1A1A',
    marginTop: hp('4%'),
  },
  segmentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
    borderBottomWidth: 2,
        borderBottomColor: 'rgba(93,93,93,0.07)',

  },
  segmentText: {
    fontFamily: 'poppins.regular',
    fontSize: 14,
    color: colors.primary,
    letterSpacing: 0,
    fontWeight: '500',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default MyAppointmentScreen;
