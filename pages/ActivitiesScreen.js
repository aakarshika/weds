// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { FlatList, SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native';
import { CardList } from 'react-native-card-list';

const cards = [
  {
    id: "0",
    title: "Milestone Messages",
    picture: require('../assets/starry.jpeg'),
    content: <Text>Milestone Messages</Text>
  },
  {
    id: "1",
    title: "Dhinchak Dhol Dedication",
    picture: require('../assets/starry.jpeg'),
    content: <Text>Dhinchak Dhol Dedication</Text>
  },
  {
    id: "2",
    title: "Snaps Schedule",
    picture: require('../assets/starry.jpeg'),
    content: <Text>Snaps Schedule</Text>
  },
  {
    id: "3",
    title: "Whatchya Wearin",
    picture: require('../assets/starry.jpeg'),
    content: <Text>Whatchya Wearin</Text>
  },
  {
    id: "4",
    title: "Rockstars Registration",
    picture: require('../assets/starry.jpeg'),
    content: <Text>Rockstars Registration</Text>
  },
  {
    id: "5",
    title: "Go Gift Givers",
    picture: require('../assets/starry.jpeg'),
    content: <Text>Go Gift Givers</Text>
  },
  {
    id: "6",
    title: "Chatpati Chat",
    picture: require('../assets/starry.jpeg'),
    content: <Text>Chatpati Chat</Text>
  },
  {
    id: "7",
    title: "R.S.V.P.",
    picture: require('../assets/starry.jpeg'),
    content: <Text>R.S.V.P.</Text>
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

const ActivitiesScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>

      <CardList cards={cards} />
      </View>
    </SafeAreaView>
  );
};
export default ActivitiesScreen;
