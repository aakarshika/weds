// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from 'react';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { FlatList,Button,  SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native';
import { CardList } from 'react-native-card-list';

const cards = [
  {
    id: "0",
    title: "Reaching Om Vilas",
    picture: require('../assets/starry.jpeg'),
    // content: <Text>Reaching Om Vilas</Text>
  },
  {
    id: "1",
    title: "Inside Om Vilas",
    picture: require('../assets/starry.jpeg'),
    // content: <Text>Inside Om Vilas</Text>
  },
  {
    id: "2",
    title: "Search Menu",
    picture: require('../assets/starry.jpeg'),
    content: <Text>Search Menu</Text>
  }
]
const  styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const MapScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
      <Text>Hotel Taj, New York City, London - 226024</Text>
      <Button
        title={`Open in Maps`} />
      <CardList cards={cards} />
      </View>
    </SafeAreaView>
  );
};
export default MapScreen;
