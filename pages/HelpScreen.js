// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { FlatList, SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native';
import { CardList } from 'react-native-card-list';

const cards = [
  {
    id: "0",
    title: "Lost and Found",
    picture: require('../assets/starry.jpeg'),
    content: <Text>Lost and Found</Text>
  },
  {
    id: "1",
    title: "Find a Friend",
    picture: require('../assets/starry.jpeg'),
    content: <Text>Find a Friend</Text>
  },
  {
    id: "2",
    title: "Find the Food",
    picture: require('../assets/starry.jpeg'),
    content: <Text>Find the Food</Text>
  },
  {
    id: "3",
    title: "Secret Supplies",
    picture: require('../assets/starry.jpeg'),
    content: <Text>Secret Supplies</Text>
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

const HelpScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>

      <CardList cards={cards} />
      </View>
    </SafeAreaView>
  );
};
export default HelpScreen;
