import {StyleSheet, Text, View, FlatList,} from 'react-native';
import React from 'react';

const App = () => {
  const MyData = [
    {title: 'Bangladesh', subtitle: 'This is our Country'},
    {title: 'India', subtitle: 'This is our Country'},
    {title: 'India', subtitle: 'This is our Country'},
    {title: 'India', subtitle: 'This is our Country'},
    {title: 'India', subtitle: 'This is our Country'},
    {title: 'India', subtitle: 'This is our Country'},
    {title: 'India', subtitle: 'This is our Country'},
    {title: 'India', subtitle: 'This is our Country'},
    {title: 'India', subtitle: 'This is our Country'},
    {title: 'India', subtitle: 'This is our Country'},
    {title: 'India', subtitle: 'This is our Country'},
    {title: 'India', subtitle: 'This is our Country'},
    {title: 'India', subtitle: 'This is our Country'},
    {title: 'India', subtitle: 'This is our Country'},
    {title: 'India', subtitle: 'This is our Country'},
    {title: 'India', subtitle: 'This is our Country'},
    {title: 'India', subtitle: 'This is our Country'},
    {title: 'India', subtitle: 'This is our Country'},
    {title: 'India', subtitle: 'This is our Country'},
  ];

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={MyData}
      renderItem={({item}) => (
        <View style={{backgroundColor: 'white', padding: 10, margin: 5}}>
          <Text style={{color: 'black', fontSize: 20}}>{item.title}</Text>
          <Text style={{color: 'gray', fontSize: 15}}>{item.subtitle}</Text>
        </View>
      )}
    />
  );
};

export default App;

const styles = StyleSheet.create({});
