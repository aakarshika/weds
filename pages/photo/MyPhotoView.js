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

const stylesImage = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  customImageContainer: {
    alignItems: 'center',
    borderRadius: 11,
    width: "100%",
    height: '100%',
    justifyContent: 'center'
  },
  customImage: {
    borderColor: 'grey',
    borderRadius: 3,
    borderWidth: 1,
    width: 150,
    height: 155
  },
});
const MyPhotoView = ({ selectedImageIndex }) => {
  var photoData = getPhotoDetails(selectedImageIndex);
  return (
    <SafeAreaView style={{ flex: 1 }}>

<View style={stylesImage.customImageContainer}>
        <Image
          resizeMode="cover"
          source={{uri: photoData.url}}
          style={stylesImage.customImage}
          thumbnailSource={photoData.url}
        />
      </View>
          <View style={{ flex: 1, padding: 16 }}>
          <Text style={styles.item}>{selectedImageIndex} - 00</Text>
          </View>
        </SafeAreaView>
  );
};
const getPhotoDetails = (index) =>{
  return {
    id: 1,
    url: 'https://images.unsplash.com/photo-1630149462161-2fe69fa964ee?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    thumbUrl: '',
  };
};
export default MyPhotoView;
