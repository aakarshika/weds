import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, StatusBar } from 'react-native';

const Header = ({currentIndex, albumName}) => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <Text>{albumName}</Text>
        <Text style={styles.text}>Image Number {currentIndex}</Text>
        <Text style={styles.text}>Share</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'red',
    flexDirection: 'row',
    height: 52,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: StatusBar.currentHeight,
  },
  text: {
    color: 'white',
  },
});

export default Header;