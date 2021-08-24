import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const width = Dimensions.get('screen').width;

import colors from '../colors/colors';
import CardView from 'react-native-cardview';

export default function SearchSaloon({name, subtitle, ratings, image}) {
  return (
    <CardView
      cardElevation={10}
      cardMaxElevation={10}
      cornerRadius={8}
      style={styles.container}>
      <View style={styles.topCardContainer}>
        <Image style={styles.Image} source={image} />

        <View style={styles.topTextContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.subTitle}>{subtitle}</Text>
          <View style={styles.ratingsContainer}>
            <Image
              style={styles.star}
              source={require('../assets/icons/star.png')}
            />
            <Text style={{...styles.nearyouText, ...styles.ratings}}>
              {ratings}
            </Text>
          </View>
        </View>
      </View>

      <View>
        <View style={styles.seprator} />
        <View style={styles.categoriesContainer}>
          <View style={styles.catNameTime}>
            <Text style={styles.catName}>Hair Styling</Text>
            <Text style={styles.catTime}>20-30 minutes</Text>
          </View>
          <Text style={styles.catName}>$35</Text>
        </View>
        <View style={{...styles.seprator}} />

        {/* Second Category */}
        <View style={styles.categoriesContainer}>
          <View style={styles.catNameTime}>
            <Text style={styles.catName}>Rebonding</Text>
            <Text style={styles.catTime}>50-60 minutes</Text>
          </View>
          <Text style={styles.catName}>$42</Text>
        </View>
        <View style={{...styles.seprator}} />

        {/* Third Category */}
        <View style={styles.categoriesContainer}>
          <View style={styles.catNameTime}>
            <Text style={styles.catName}>Hair Coloring</Text>
            <Text style={styles.catTime}>50-60 minutes</Text>
          </View>
          <Text style={styles.catName}>$42</Text>
        </View>
        <View style={{...styles.seprator}} />
      </View>

      <Text style={styles.viewAll}>View All</Text>
    </CardView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp('90%'),
    padding: 20,
    backgroundColor: colors.white,
    alignSelf: 'center',
    marginTop: 25,
    padding: 15,
  },

  Image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },

  nearyouText: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
    color: colors.secondry,
    letterSpacing: 0,
  },

  ratings: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    fontWeight: '300',
    color: colors.secondry,
    marginHorizontal: 5,
  },

  star: {
    width: 17,
    height: 16,
  },

  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  name: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: colors.secondry,
    letterSpacing: 0,
    fontWeight: '600',
  },

  subTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: colors.topservicesColor,
    letterSpacing: 0,
    fontWeight: '400',
  },

  topCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  topTextContainer: {
    marginHorizontal: 15,
  },

  seprator: {
    width: width,
    alignSelf: 'center',
    backgroundColor: colors.seprator,
    height: 1,
    marginTop: 10,
  },

  catName: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: colors.secondry,
    letterSpacing: 0,
    fontWeight: '500',
  },
  catTime: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: colors.topservicesColor,
    letterSpacing: 0,
    fontWeight: '400',
    marginHorizontal: 10,
  },

  catNameTime: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  categoriesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  viewAll: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: colors.primary,
    letterSpacing: 0,
    fontWeight: '500',
    textAlign: 'center',
    paddingTop: 8,
  },
});