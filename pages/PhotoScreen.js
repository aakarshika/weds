import React from 'react';
import { FlatList , SafeAreaView, StyleSheet, Text, View, Image, Platform } from 'react-native';
import Card from './card/Card';
import MyPhotoView from './photo/MyPhotoView'
import {useState} from "react";


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
const PhotoScreen = ({ navigation, route}) => {


  
  const [selectedImageIndex, setSelectedImageIndex] = useState(route.params.selectedImageIndex);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MyPhotoView selectedImageIndex={selectedImageIndex}
      />
    <View >
    </View>
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'pppppp'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => 
        <Card cardData={item} />
        }
      />
    </View>
    </SafeAreaView>
  );
}

export default PhotoScreen;