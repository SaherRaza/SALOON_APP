import React, { useState }  from 'react';
import { View, StyleSheet, TextInput,TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import  Ionicons  from 'react-native-vector-icons/Ionicons';

function AppTextInput({ name, ...otherProps }) {
  
  const [focus, setFocus] = useState("red");

  const onInputClick = () => {
    if (focus === "red") {
      setFocus("yellow");
    }
    else {
      setFocus("red");
    }
  }

  

  return (

    <View style={{ ...styles.textInputContainer, borderColor: focus }}>
      
      <TextInput onPress={() => onInputClick()}
        style={styles.textInput} {...otherProps} />
      <TouchableOpacity>
         <Ionicons style={styles.icon} name={name} size={15} color="#B8B8B8" />
      </TouchableOpacity>
        
      </View>
    
    
    );
}
const styles = StyleSheet.create({
    textInputContainer: {
    flexDirection: 'row',
    borderWidth: 1, 
    paddingBottom: 0.5,
    width: 374,
    height:50,
    alignSelf: 'center',
    alignItems: 'center', 
    backgroundColor: "#FFFFFF",
    borderRadius:8, 
    
  },
  textInput: {
      paddingLeft: 4,
      fontWeight: "400",
    fontSize:14,
   left:20, flex:1
  },
  icon: {
    right:11
  }
})
export default AppTextInput;