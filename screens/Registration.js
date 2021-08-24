import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  ScrollView,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppButton from '../components/AppButton';

function Registeration({navigation}) {
 const [focus, setFocus] = useState('#E5E9F0');

  const onInputClick = () => {
    if (focus === '#E5E9F0') {
      setFocus('#FD928B');
    } else {
      setFocus('#E5E9F0');
    }
  };

  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require('../assets/background.png')}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.iconLeft}>
        <Ionicons name="chevron-back-outline" size={24} color="#1A1A1A" />
      </TouchableOpacity>
      <View style={styles.container}>
        <ScrollView>
          
          <View>
            <Text style={styles.welcomeText}>Hello there</Text>
            <Text style={styles.detailText}>Let's create an account</Text>
          </View>

          <Text style={styles.emailText}>Name</Text>
          <View style={{...styles.textInputContainer, borderColor: focus}}>
            <TextInput
              onPress={() => onInputClick()}
              style={styles.textInput}
              placeholder="Joe Doe"
              placeholderTextColor="#020D18"
              fontFamily="poppins.regular"
            />
          </View>

          <Text style={styles.emailText}>Email Address</Text>
          <View style={{...styles.textInputContainer, borderColor: focus}}>
            <TextInput
              onPress={() => onInputClick()}
              style={styles.textInput}
              placeholder="Sample@mail.com"
              placeholderTextColor="#020D18"
              fontFamily="poppins.regular"
            />
          </View>

          <Text style={styles.emailText}>Password</Text>
          <View style={{...styles.textInputContainer, borderColor: focus}}>
            <TextInput
              onPress={() => onInputClick()}
              style={styles.textInput}
              placeholder="****"
              placeholderTextColor="#020D18"
              fontFamily="poppins.regular"
            />
            <TouchableOpacity>
              <Ionicons
                style={styles.icon}
                name="eye"
                size={13}
                color="#B8B8B8"
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.emailText}>Confirm Password</Text>
          <View style={{...styles.textInputContainer, borderColor: focus}}>
            <TextInput
              onPress={() => onInputClick()}
              style={styles.textInput}
              placeholder="****"
              placeholderTextColor="#020D18"
              fontFamily="poppins.regular"
            />
            <TouchableOpacity>
              <Ionicons
                style={styles.icon}
                name="eye"
                size={13}
                color="#B8B8B8"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => console.log('pressed')}>
            <View style={styles.loginBtn}>
              <Text style={styles.loginButtonText}>Create Account</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.lineBreakContainer}>
            <View style={styles.lineBreak}></View>
            <View>
              <Text style={styles.orText}>Or</Text>
            </View>
            <View style={styles.lineBreak}></View>
          </View>

          <TouchableOpacity onPress={() => console.log('pressed')}>
            <View style={styles.facebookBtn}>
              <Text style={styles.facebookButtonText}>
                Conitnue with Facebook
              </Text>
            </View>
          </TouchableOpacity>

          <View style={styles.createAccountContainer}>
            <Text style={styles.text1}>I have an account, </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.text2}>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: wp('100%'),
  flex:1
  },
  container: {
    backgroundColor: '#FFFFFF',
    marginTop: hp('12%'),
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: wp('100%'),
    height: hp('100%'),
    position: 'absolute',
  },
  iconLeft: {
    backgroundColor: '#FFFFFF',
    width: 35,
    height: 35,
    borderRadius: 360,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 25,
  },
  welcomeText: {
    fontSize: 25,
    fontFamily: 'poppins.semibold',
    fontWeight: '600',
    color: '#1A1A1A',
    textAlign: 'center',
    marginTop:hp('1%')
  },
  detailText: {
    fontSize: 16,
    fontFamily: 'poppins.regular',
    fontWeight: '400',
    color: '#6C6C6C',
    textAlign: 'center',
    marginTop:hp('-1.5%')
  },
  emailText: {
     marginLeft: wp('5%'),
    marginTop: hp('1%'),
    color: '#000000',
    fontWeight: '400',
    fontFamily: 'poppins.regular',
    fontSize: 16,
  },
  textInputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    width: 374,
    padding: 3,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  textInput: {
    fontWeight: '400',
    fontSize: 14,
    flex: 1,
    textAlign: 'left',
  },
  icon: {
    right: 11,
  },
  loginBtn: {
    backgroundColor: '#FD928B',
    padding: 13,
    borderWidth: 1,
    marginTop: hp('2%'),
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
  lineBreakContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop:hp('1.5')
  },
  lineBreak: {
    width: wp('40%'),
    borderBottomColor: '#E5E9F0',
    borderBottomWidth: 1,
  },
  orText: {
    fontSize: 14,
    color: '#6E6E6E',
    fontFamily: 'poppins.regular',
    fontWeight: '400',
    paddingHorizontal: 5,
  },
    facebookBtn: {
    backgroundColor: '#FFFFFF',
    padding: 13,
    borderWidth: 1,
    marginTop: hp('1.5%'),
    borderRadius: 8,
    width: 374,
    alignSelf: 'center',
    borderColor: '#E8E8E8',
  },
  facebookButtonText: {
    textAlign: 'center',
    fontFamily: 'poppins.semibold',
    fontSize: 16,
    fontWeight: '500',
    color: '#010C17',
  },
  createAccountContainer: {
    flexDirection: 'row',
    marginTop: hp('4%'),
    justifyContent: 'center',
  },
  text1: {
    color: '#010C17',
    fontSize: 16,
    fontFamily: 'poppins.regular',
    fontWeight: '400',
  },
  text2: {
    color: '#FD928B',
    fontSize: 16,
    fontFamily: 'poppins.regular',
    fontWeight: '500',
  },
});
export default Registeration;
