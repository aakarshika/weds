// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from 'react';
import { FlatList , SafeAreaView, StyleSheet, Image, Text, View, Platform } from 'react-native';

const styles = StyleSheet.create({
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
const Card = ({ cardData }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>

          <View style={{ flex: 1, padding: 16 }}>
          <Text style={styles.item}>{cardData.key} - 00</Text>
          </View>
        </SafeAreaView>
  );
};
export default Card;
