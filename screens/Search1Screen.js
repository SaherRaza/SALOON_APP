import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {interpolateNode} from 'react-native-reanimated';

import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchSaloon from './SearchSaloon';
import colors from '../colors/colors';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const data = [
  {
    key: '1',
    searchTag: 'Nail arts',
  },
  {
    key: '2',
    searchTag: 'Head massage',
  },
  {
    key: '3',
    searchTag: 'Bridal dress',
  },
];

//Flatlist for Near you data
const searchSalonData = [
  {
    key: '1',
    ratings: '4.9',
    name: 'Salon Zero',
    imageN: require('../assets/image3.png'),
    subtitle: '#42, York Street,Colombo',
  },
  {
    key: '2',
    ratings: '4.5',
    name: 'BeautyShop',
    imageN: require('../assets/image3.png'),
    subtitle: '#42, York Street,Colombo',
  },
  {
    key: '3',
    ratings: '4.0',
    name: 'BabyPlanet',
    imageN: require('../assets/image3.png'),
    subtitle: '#42, York Street,Colombo',
  },
];

function RecentSearches() {
  return (
    <View style={styles.recentSearchContainer}>
      <Text style={styles.rSearch}>Recent Searchs</Text>

      <View style={styles.listContainer}>
        <FlatList
          keyExtractor={(item, index) => item.key}
          nestedScrollEnabled
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({item}) => (
            <View style={styles.searchList}>
              <Ionicons
                name="ios-search-outline"
                color={colors.black}
                size={20}
              />
              <Text style={styles.searchtag}>{item.searchTag}</Text>
              
              
            </View>
          )}
        />
      </View>
    </View>
  );
}

export default function Search1Screen({navigation}) {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => {
    setSearchQuery(query);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.searchBarContainer}>
        <Searchbar
          autoFocus={true}
          inputStyle={styles.inpuStyles}
          style={styles.searchBackground}
          placeholderTextColor={colors.secondry}
          placeholder="Search here.."
          onChangeText={onChangeSearch}
          value={searchQuery}

          // clearIcon={() => (
          //   <Image
          //     style={styles.cancelIcon}
          //     source={require('../../../icons/searchIcon/cancel.png')}
          //   />
          // )}
        />

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{...styles.nearyouText}}>Cancel</Text>
        </TouchableOpacity>
      </View>
      {searchQuery.length === 0 ? (
        <RecentSearches />
      ) : (
        <View style={styles.listContainer}>
          <FlatList
            contentContainerStyle={styles.cardListContainer}
            keyExtractor={(item, index) => item.key}
            nestedScrollEnabled
            showsHorizontalScrollIndicator={false}
            data={searchSalonData}
            renderItem={({item}) => (
              <SearchSaloon
                name={item.name}
                subtitle={item.subtitle}
                ratings={item.ratings}
                image={item.imageN}
              />
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  cancelIcon: {
    width: 15,
    height: 15,
  },

  inpuStyles: {
    fontFamily: 'poppins.regular',
    fontSize: 14,
    fontWeight: '400',
    opacity: 0.5,
  },
  searchBackground: {
    borderRadius: 8,
    backgroundColor: "#F3F3F6",
    width: width - 110,
    height: 50,
    alignSelf: 'center',
    elevation: 0,
  },

  searchBarContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  nearyouText: {
    fontSize: 14,
    fontFamily: 'poppins.semibold',
    fontWeight: '400',
    color: "#FD928B",
    letterSpacing: 0,
  },

  rSearch: {
    fontSize: 16,
    fontFamily: 'poppins.regular',
    fontWeight: '400',
    color: '#848484',
    letterSpacing: 0,
  },

  recentSearchContainer: {
    paddingHorizontal: 20,
    paddingTop: 25,
  },

  searchtag: {
    fontFamily: 'poppins.regular',
    fontSize: 16,
    color: '#1A1A1A',
    marginHorizontal: 15,
  },
  searchList: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },

  listContainer: {},

  cardListContainer: {
    paddingBottom: 100,
  },
});