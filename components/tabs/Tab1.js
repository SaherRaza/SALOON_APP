import React, {useState} from 'react';
import {
    View, TouchableWithoutFeedback, Image,
Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../colors/colors';

function Tab1(props) {
     const [border, setBorder] = React.useState('#F3F3F3');
  const [backColor, setbackColor] = React.useState('#ECECEC');

  const [height, setHeight] = React.useState(0);
  const [display, setDisplay] = React.useState('none');

  
  const onPressCard = () => {
    if (border === '#F3F3F3') {
      setBorder(colors.primary);
      setbackColor(colors.primary);
      setHeight(100), setDisplay('flex');
    } else {
      setBorder('#F3F3F3');
      setbackColor('#ECECEC');
      setDisplay('none');
      setHeight(0);
    }
  };


    return (
         <View>
                  <TouchableWithoutFeedback onPress={onPressCard}>
                    <View>
                      <View
                        style={{
                          ...styles.container2,
                          borderColor: border,
                          borderWidth: 1,
                        }}>
                        <View style={styles.leftTextContainer}>
                          <View
                            style={{
                              ...styles.checkCircal,
                              backgroundColor: backColor,
                            }}>
                            <Image
                              style={styles.check}
                              source={require('../../assets/icons/check.png')}
                            />
                          </View>

                          <View>
                            <Text style={styles.title}>Hair Styling</Text>
                            <Text style={styles.subtitle}>20-30 minutes</Text>
                          </View>
                        </View>

                        <Text style={styles.title}>$35</Text>
                      </View>
                    </View>
        </TouchableWithoutFeedback>
        
        <TouchableWithoutFeedback onPress={onPressCard}>
                    <View>
                      <View
                        style={{
                          ...styles.container2,
                          borderColor: border,
                          borderWidth: 1,
                        }}>
                        <View style={styles.leftTextContainer}>
                          <View
                            style={{
                              ...styles.checkCircal,
                              backgroundColor: backColor,
                            }}>
                            <Image
                              style={styles.check}
                              source={require('../../assets/icons/check.png')}
                            />
                          </View>

                          <View>
                            <Text style={styles.title}>Hair Styling</Text>
                            <Text style={styles.subtitle}>20-30 minutes</Text>
                          </View>
                        </View>

                        <Text style={styles.title}>$35</Text>
                      </View>
                    </View>
            </TouchableWithoutFeedback>
            
            
                </View>
    );
}


const styles = StyleSheet.create({
    container2: {
    width: wp('90%'),
    height: 60,
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    elevation: 12,
    backgroundColor: colors.white,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
    },
     leftTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    },
     checkCircal: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  check: {
    width: 10,
    height: 10,
    },
   title: {
    fontFamily: 'poppins.medium',
    fontSize: 14,
    color: colors.secondry,
    fontWeight: '500',
    left: 0,
  },

  subtitle: {
    fontFamily: 'poppins.regular',
    fontSize: 12,
    color: colors.topservicesColor,
    fontWeight: '400',
    left: 0,
  },
})
export default Tab1;