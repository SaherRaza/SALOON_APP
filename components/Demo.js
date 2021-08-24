import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';

const Demo = () => {
  const [List, setList] = useState([
    {title: 'Item-1', selected: false},
    {title: 'Item-2', selected: false},
    {title: 'Item-3', selected: false},
    {title: 'Item-4', selected: false},
    {title: 'Item-5', selected: false},
  ]);

  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
      <FlatList
        data={List}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              setList(
                List.map(e => {
                  if (e.title == item.title) {
                    e.selected = !e.selected;
                  }
                  return e;
                }),
              );
            }}>
            <Text
              style={{
                fontSize: 20,
                backgroundColor: item.selected ? 'pink' : 'white',
                color: '#000',
              }}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Demo;

const styles = StyleSheet.create({});