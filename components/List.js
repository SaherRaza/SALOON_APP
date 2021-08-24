import React, {useState} from 'react';
import {
    View, TouchableWithoutFeedback, Image,
Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../colors/colors';

function List(props) {

  const [List, setList] = React.useState([
    {
      id: 1, serviceName: "Hair Style",
      time: "20-30 minutes", price: "35$",
      selected: false
    },
    {
      id: 2, serviceName: "Regular Haircut",
      time: "50 minutes", price: "55$",
      selected: false
    },
    {
      id: 3, serviceName: "Hair Coloring",
      time: "50-60 minutes", price: "40$",
      selected: false
    },
    {
      id: 4, serviceName: "Rebonding",
      time: "50-60 minutes", price: "60$",
      selected: false
    },
    {
      id: 5, serviceName: "Curling",
      time: "50 minutes", price: "50$",
      selected: false
    }
    
 ])

  return (
         <View>
        <FlatList
        data={List}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              setList(
                List.map(e => {
                  if (e.id == item.id) {
                    e.selected = !e.selected;
                  }
                  return e;
                }),
              );
            }}>
            <View>
                      <View
                        style={{
                          ...styles.container2,
                         
                borderColor: item.selected ? '#FD928B' : '#ECECEC',
                          
                        }}>
                        <View style={styles.leftTextContainer}>
                          <View
                            style={{
                              ...styles.checkCircal,
                              
                          backgroundColor: item.selected ? '#FD928B' : '#ECECEC',
                            }}>
                            <Image
                              style={styles.check}
                              source={require('../assets/icons/check.png')}
                            />
                          </View>

                          <View>
                            <Text style={styles.title}>{item.serviceName}</Text>
                            <Text style={styles.subtitle}>{item.time}</Text>
                          </View>
                        </View>

                <Text style={styles.title}>{item.price}</Text>
                      </View>
                    </View>

          </TouchableOpacity>
        )}
        />
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
    backgroundColor: colors.white,
    borderRadius: 8,
    borderWidth: 1,
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
export default List;