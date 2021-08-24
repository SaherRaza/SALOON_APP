import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
  TextInput,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Login({navigation}) {
  const [textInput1, setFocus1] = useState('#E5E9F0');
  const [textInput2, setFocus2] = useState('#E5E9F0');

  const onInputClick1 = () => {
    if (textInput1 === '#E5E9F0') {
      setFocus1('#FD928B');
    } else {
      setFocus1('#E5E9F0');
    }
  };
  const onInputClick2 = () => {
    if (textInput2 === '#E5E9F0') {
      setFocus2('#FD928B');
    } else {
      setFocus2('#E5E9F0');
    }
  };

  return (
    <KeyboardAvoidingView  behavior={Platform.OS==='ios' ?'padding':'height'}>
          <ScrollView>
    <SafeAreaView style={{flex:1}}>
      <ImageBackground
        resizeMode="cover"
        style={styles.background}
        source={require('../assets/background.png')}>
        <View style={styles.container}>
            <View>
              <Text style={styles.welcomeText}>Welcome Back</Text>
              <Text style={styles.detailText}>
                Please Login to your account
              </Text>
            </View>

            <View>
            <Text style={styles.emailText}>Email Address</Text>
            <View style={{...styles.textInputContainer, borderColor: textInput1}}>
              <TextInput
                onFocus={() => onInputClick1()}
                style={styles.textInput}
                placeholder="Sample@mail.com"
                placeholderTextColor="#020D18"
                fontFamily="poppins.regular"
              />
              </View>
              </View>

            <Text style={styles.emailText}>Password</Text>
            <View style={{...styles.textInputContainer, borderColor: textInput2}}>
              <TextInput
                onPress={() => onInputClick2()}
                style={styles.textInput}
                placeholder="*****"
                placeholderTextColor="#020D18"
                fontFamily="poppins.regular"
              />
              <TouchableOpacity>
                <Ionicons
                  style={styles.icon}
                  name="eye"
                  size={15}
                  color="#B8B8B8"
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity>
              <Text style={styles.forgotpasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => navigation.navigate('Tabs')}>
              <View style={styles.loginBtn}>
                <Text style={styles.loginButtonText}>Login</Text>
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
                <Text style={styles.facebookButtonText}>Conitnue with Facebook</Text>
              </View>
            </TouchableOpacity>

           

            <View style={styles.createAccountContainer}>
              <Text style={styles.text1}>I'am a new user, </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Registeration')}>
                <Text style={styles.text2}>Create Account</Text>
              </TouchableOpacity>
            </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
          </ScrollView>
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    width: wp('100%'),
    height: hp('100%'),
  },
  container: {
    backgroundColor: '#FFFFFF',
    marginTop: hp('20%'),
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: wp('100%'),
    height: hp('80%'),
  },
  welcomeText: {
    fontSize: 25,
    fontFamily: 'poppins.semibold',
    fontWeight: '600',
    color: '#1A1A1A',
    textAlign: 'center',
    top: 10,
  },
  detailText: {
    fontSize: 16,
    fontFamily: 'poppins.regular',
    fontWeight: '400',
    color: '#6C6C6C',
    textAlign: 'center',
    top: 5,
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
    padding:5,
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
  forgotpasswordText: {
    left: 235,
    marginTop: hp('1%'),
    color: '#020D18',
    right: 23,
    fontWeight: '400',
    fontFamily: 'poppins.regular',
    fontSize: 16,
  },
  loginBtn: {
    backgroundColor: '#FD928B',
    padding: 15,
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
  facebookBtn: {
    backgroundColor: '#FFFFFF',
    padding: 15,
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
    justifyContent: 'center',
    marginTop: hp('8%')
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
  lineBreakContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: hp('1.5%'),
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
});
export default Login;
