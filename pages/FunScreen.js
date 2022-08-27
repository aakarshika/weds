// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { FlatList, SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native';
import { CardList } from 'react-native-card-list';

const cards = [
  {
    id: "0",
    title: "Quizznoz",
    picture: require('../assets/starry.jpeg'),
    content: <Text>Quizznoz</Text>
  },
  {
    id: "1",
    title: "Lucky Losers",
    picture: require('../assets/starry.jpeg'),
    content: <Text>Lucky Losers</Text>
  },
  {
    id: "2",
    title: "General Genei",
    picture: require('../assets/starry.jpeg'),
    content: <Text>General Genei</Text>
  },
  {
    id: "3",
    title: "Silent DJ",
    picture: require('../assets/starry.jpeg'),
    content: <Text>Silent DJ</Text>
  },
  {
    id: "4",
    title: "Treasure Top",
    picture: require('../assets/starry.jpeg'),
    content: <Text>Treasure Top</Text>
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

const FunScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>

      <CardList cards={cards} />
      </View>
    </SafeAreaView>
  );
};
export default FunScreen;
