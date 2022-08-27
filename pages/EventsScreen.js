// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { FlatList, SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native';
import { CardList } from 'react-native-card-list';

const cards = [
  {
    id: "0",
    title: "Milan abhi adha adhoora hai",
    picture: require('../assets/starry.jpeg'),
    content: <Text>Milan abhi adha adhoora hai</Text>
  },
  {
    id: "1",
    title: "Kuch baat ho chuki hai, Kuch baatein abhi hain baaki",
    picture: require('../assets/starry.jpeg'),
    content: <Text>Kuch baat ho chuki hai, Kuch baatein abhi hain baaki</Text>
  },
  {
    id: "2",
    title: "Hume milaane mein sabka sehyog poora hai",
    picture: require('../assets/starry.jpeg'),
    content: <Text>Hume milaane mein sabka sehyog poora hai</Text>
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

const EventsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>

      <CardList cards={cards} />
      </View>
    </SafeAreaView>
  );
};
export default EventsScreen;
