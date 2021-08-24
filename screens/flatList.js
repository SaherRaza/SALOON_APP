import React, {useEffect} from 'react';

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  FlatList,
  ScrollView,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {Container, Tab, Tabs, ScrollableTab} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import WomenHaircutView from '../../../components/BusinessProfileScreen/ScrollableTabsViews/WomenHaircutView';
import PersonRatings from '../../../components/BusinessProfileScreen/PersonRatings';

const data = [
  {
    key: '1',
    name: 'HairStyling',
    subTitle: '20-30 minutes',
    price: '$35',
    isSelected: false,
  },
  {
    key: '2',
    name: 'Regular Haircut',
    subTitle: '30 minutes',
    price: '$15',
    isSelected: false,
  },
  {
    key: '3',
    name: 'Hair Cooloring',
    subTitle: '50-60 minutes',
    price: '$40',
    isSelected: false,
  },

  {
    key: '4',
    name: 'Rebonding',
    subTitle: '50-60 minutes',
    price: '$42',
    isSelected: false,
  },

  {
    key: '5',
    name: 'Curling',
    subTitle: '50-60 minutes',
    price: '$35',
    isSelected: false,
  },
];

const ratingsData = [
  {
    key: '1',
    name: 'Phillip George',
    subTitle: '20-30 minutes',
    price: '$35',
  },
  {
    key: '2',
    name: 'Pok Ae-Ra',
    subTitle: '30 minutes',
    price: '$15',
  },
  {
    key: '3',
    name: 'Bonelwa Ngqawana',
    subTitle: '50-60 minutes',
    price: '$40',
  },
];

import colors from '../../../Configs/colors';
import TopImageSlider from '../../../components/BusinessProfileScreen/TopImageSlider';
import {color} from 'react-native-reanimated';

export default function BusinessProfileScreen({navigation}) {
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
    <SafeAreaView style={styles.container}>
      {Platform.OS === 'android' ? (
        <StatusBar
          hidden={true}
          translucent={true}
          barStyle="dark-content"
          backgroundColor="#fff"
        />
      ) : (
        <StatusBar
          hidden={false}
          translucent={true}
          barStyle="dark-content"
          backgroundColor="#fff"
        />
      )}

      <View
        style={{
          width: wp('100%'),
          height: height,
          position: 'absolute',
          bottom: 0,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          zIndex: 1,
          elevation: 5,
          backgroundColor: colors.white,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('CreateAppointmentScreen')}>
          <View style={{...styles.bookButton, display: display}}>
            <Text style={styles.booknowText}>Confirm Booking ($55)</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <ScrollView
        contentContainerStyle={{
          width: wp('100%'),
          height: hp('210%'),
        }}
        nestedScrollEnabled={true}>
        <TopImageSlider />

        <View style={styles.nearyouRow}>
          <Text style={styles.nearyouText}>Royal Beauty Salon</Text>
          <View style={styles.addressContainer}>
            <Image
              style={styles.locationIcon}
              source={require('../../../icons/BusinessProfileIcons/location.png')}
            />
            <Text style={styles.cardSubtitle}>42, York Street, Colombo</Text>
          </View>

          <View style={styles.ratingsContainer}>
            <Text style={{...styles.nearyouText, ...styles.ratings}}>4.9</Text>
            <Image
              style={styles.star}
              source={require('../../../icons/starIcons/star1.png')}
            />
            <Text style={styles.noofRatings}>(314 Reviews)</Text>
          </View>
        </View>

        <Container style={styles.tabsContainer}>
          <Tabs
            style={{
              backgroundColor: colors,
            }}
            tabBarBackgroundColor="#fff"
            tabBarUnderlineStyle={{
              height: 2,
              borderRadius: 1,
              backgroundColor: colors.primary,
            }}
            renderTabBar={() => (
              <ScrollableTab
                tabsContainerStyle={{
                  width: '95%',
                }}
              />
            )}>
            {/* Tab 1 */}
            <Tab
              heading="All Services"
              tabStyle={styles.InactiveTabStyle}
              textStyle={styles.inactiveText}
              activeTabStyle={styles.activeTabStyle}
              activeTextStyle={styles.activeText}></Tab>

            {/* Tab 2 */}

            <Tab
              heading="Women's Haircut"
              tabStyle={styles.InactiveTabStyle}
              textStyle={styles.inactiveText}
              activeTabStyle={styles.activeTabStyle}
              activeTextStyle={styles.activeText}>
              <View>
                {/* <WomenHaircutView
name="HairStyling"
subTitle="20-30 minutes"
price="$35"
/>
<WomenHaircutView
name="Regular Haircut"
subTitle="30 minutes"
price="$15"
/>
<WomenHaircutView
name="Hair Cooloring"
subTitle="50-60 minutes"
price="$40"
/>
<WomenHaircutView name="Rebonding" subTitle="50-60 minutes" price="$42" />
<WomenHaircutView name="Curling" subTitle="50-60 minutes" price="$35" /> */}

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
                              source={require('../../../icons/BusinessProfileIcons/check.png')}
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

                <View style={{...styles.aboutUSContainer, display: 'flex'}}>
                  <Text
                    style={{
                      ...styles.booknowText,
                      color: colors.black,
                      marginTop: 3,
                    }}>
                    About Us
                  </Text>
                  <View>
                    <Text style={styles.aboutUsText}>
                      Nam porttitor blandit accumsan. Ut vel dictum{'\n'} sem, a
                      pretium dui. In malesuada enim in dolor{'\n'} euismod, id
                      commodo mi consectetur. Curabitur{'\n'} at vestibulum
                      nisi. Nullam vehicula nisi velit.{'\n'} Mauris turpis nisl
                    </Text>
                  </View>

                  <Text
                    style={{
                      ...styles.booknowText,
                      color: colors.secondry,
                      marginTop: 15,
                    }}>
                    Contact Us
                  </Text>

                  <View style={styles.phoneContainer}>
                    <Image
                      style={styles.phoneIcon}
                      source={require('../../../icons/BusinessProfileIcons/phone.png')}
                    />
                    <Text style={styles.aboutUsText}>912-821-3847</Text>
                  </View>

                  <View style={styles.seprator} />

                  <View style={styles.mapContainer}>
                    <View
                      style={{
                        ...styles.phoneContainer,
                        justifyContent: 'space-between',
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          height: hp('10%'),
                          alignItems: 'flex-start',
                        }}>
                        <Image
                          style={styles.phoneIcon}
                          source={require('../../../icons/BusinessProfileIcons/location.png')}
                        />
                        <Text style={styles.aboutUsText}>
                          42, York Street,{'\n'} Colombo{' '}
                        </Text>
                      </View>

                      <Image
                        style={styles.mapButton}
                        source={require('../../../images/mapbutton.png')}
                      />
                    </View>

                    <View style={styles.directionsMainContainer}>
                      <Text style={styles.directions}>Directions</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.reviewsContainer}>
                  <Text style={{...styles.booknowText, color: colors.secondry}}>
                    What people says
                  </Text>

                  <View>
                    <FlatList
                      keyExtractor={item => item.key}
                      contentContainerStyle={{
                        paddingBottom: 10,
                        marginTop: 20,
                      }}
                      nestedScrollEnabled
                      data={ratingsData}
                      renderItem={({item}) => (
                        <PersonRatings name={item.name} />
                      )}
                    />

                    {/* <Text style={styles.viewAll}>View All User Reviews</Text> */}
                  </View>
                </View>
              </View>
            </Tab>

            {/* Tab 3 */}

            <Tab
              heading="Man's Haircut"
              tabStyle={styles.InactiveTabStyle}
              textStyle={styles.inactiveText}
              activeTabStyle={styles.activeTabStyle}
              activeTextStyle={styles.activeText}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontFamily: 'Poppins-Regular',
                  }}>
                  Data Comming Soon !
                </Text>
              </View>
            </Tab>

            {/* Tab 4 */}

            <Tab
              heading="Skin Care"
              tabStyle={styles.InactiveTabStyle}
              textStyle={styles.inactiveText}
              activeTabStyle={styles.activeTabStyle}
              activeTextStyle={styles.activeText}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                  }}>
                  Data Comming Soon !
                </Text>
              </View>
            </Tab>

            {/* Tab 5 */}

            <Tab
              heading="Foot Haircut"
              tabStyle={styles.InactiveTabStyle}
              textStyle={styles.inactiveText}
              activeTabStyle={styles.activeTabStyle}
              activeTextStyle={styles.activeText}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                  }}>
                  Data Comming Soon !
                </Text>
              </View>
            </Tab>
          </Tabs>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  nearyouRow: {
    paddingTop: 15,
    paddingHorizontal: 20,
  },

  nearyouText: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
    color: colors.secondry,
    letterSpacing: 0,
  },

  ratings: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    // fontWeight: '400',
    fontWeight: '600',
    color: colors.secondry,
  },

  star: {
    width: 19,
    height: 18,
    marginHorizontal: 5,
  },

  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
  },

  cardSubtitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    letterSpacing: 0,
    fontWeight: '400',
    color: colors.topservicesColor,
  },

  noofRatings: {
    fontSize: 15,
    // fontFamily: 'Poppins-Light',
    fontFamily: 'Poppins-Bold',
    letterSpacing: 0,
    // fontWeight: '200',
    fontWeight: '500',
    color: colors.topservicesColor,
    marginHorizontal: 5,
  },

  locationIcon: {
    width: 14,
    height: 16,
    marginRight: 6,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  inactiveText: {
    color: colors.scrolltabtextcolor,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    letterSpacing: 0,
  },

  activeText: {
    color: colors.primary,
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    letterSpacing: 0,
  },

  InactiveTabStyle: {
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.seprator,
  },

  activeTabStyle: {
    backgroundColor: colors.white,
  },
  tabsContainer: {
    paddingTop: 25,
  },

  bookButton: {
    width: wp('90%'),
    height: 50,
    borderRadius: 8,
    backgroundColor: colors.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    marginTop: 30,
    elevation: 12,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  booknowText: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    letterSpacing: 0,
    fontWeight: '600',
    color: colors.white,
  },
  aboutUSContainer: {
    width: wp('90%'),
    alignSelf: 'center',
    marginTop: 50,
    padding: 15,
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
    elevation: 5,
  },
  aboutUsText: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    letterSpacing: 0,
    fontWeight: '400',
    color: colors.secondry,
    textAlign: 'left',
  },
  phoneIcon: {
    width: 13,
    height: 16,
    marginRight: 15,
  },

  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 12,
  },

  directions: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#426ED9',
    lineHeight: 25,
    letterSpacing: 0,
    fontWeight: '500',
    textAlign: 'center',
    width: wp('32%'),
    marginTop: hp('-2%'),
  },

  seprator: {
    width: wp('73%'),
    alignSelf: 'flex-end',
    marginRight: 5,
    height: 1,
    backgroundColor: colors.seprator,

    marginTop: 18,
  },

  mapButton: {
    width: 125,
    height: 87,
  },

  reviewsContainer: {
    width: wp('90%'),
    alignSelf: 'center',
    marginTop: 25,
    padding: 15,
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
    elevation: 5,
  },

  viewAll: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: colors.primary,
    fontWeight: '500',
    textAlign: 'center',
  },

  bookButton: {
    width: wp('90%'),
    height: 50,
    borderRadius: 8,
    backgroundColor: colors.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  booknowText: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    letterSpacing: 0,
    fontWeight: '600',
    color: colors.white,
  },

  //new styles
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

    elevation: 5,
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
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: colors.secondry,
    fontWeight: '500',
    left: 0,
  },

  subtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: colors.topservicesColor,
    fontWeight: '400',
    left: 0,
  },

  leftTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});