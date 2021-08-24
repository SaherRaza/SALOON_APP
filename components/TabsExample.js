import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';
import Tab1 from './tabs/Tab1';
import Tab2 from './tabs/Tab2';
import Tab3 from './tabs/Tab3';
import List from '../components/List';

import { StyleSheet, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

  
export default class TabsScrollableExample extends Component {
  render() {
    return (
      <View style={{height:hp('63%')}}>
      <Container>
        <Tabs style={{ backgroundColor: "white", marginTop:hp('-2.5%') }}
          tabBarUnderlineStyle={{height:2, backgroundColor:"#FD928B"}}
          renderTabBar={() => <ScrollableTab tabsContainerStyle={{width:"95%"}} />}>

          <Tab
            tabStyle={styles.tabstyles}
            activeTabStyle={styles.activeStyles}
            activeTextStyle={{ color: "#FD928B" }}
            textStyle={{color:"#6D6D6D"}}
            heading="All Services">
            <List />
          </Tab>
          <Tab tabStyle={styles.tabstyles}
            activeTabStyle={styles.activeStyles}
            activeTextStyle={{ color: "#FD928B" }}
            textStyle={{color:"#6D6D6D"}}
            heading="Women's Haircut">
            
            <Tab2 />
          </Tab>
          <Tab tabStyle={styles.tabstyles}
            activeTabStyle={styles.activeStyles}
            activeTextStyle={{ color: "#FD928B" }}
            textStyle={{color:"#6D6D6D"}}
            heading="Men's Haircut">
            <Tab3 />
          </Tab>
        </Tabs>
        </Container>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    height: hp('1%'),
    marginTop:hp('2%')
  },
  tabstyles: {
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    
    
  },
  activeStyles: {
    backgroundColor: "#FFFFFF",
  }
})