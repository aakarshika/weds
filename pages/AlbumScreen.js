// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import { ImageGallery, ImageObject } from '@georstat/react-native-image-gallery';
import {useState} from "react";
import { FlatList,Button,BackHandler, Image, SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native';

import Header from './photo/Header';
import Footer from './photo/Footer';
import { CardList } from 'react-native-card-list/src/CardList';
import { useNavigation } from '@react-navigation/native';

const images = [
  {
    id: 0,
    url: 'https://images.unsplash.com/photo-1629994562870-75d504fc02a1?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    thumbUrl: '',
  },
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1630149462161-2fe69fa964ee?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    thumbUrl: '',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1630149462177-35a341b42fcf?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    thumbUrl: '',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    thumbUrl: '',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1630042166175-0ebcd586fab9?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    thumbUrl: '',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1629994562870-75d504fc02a1?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    thumbUrl: '',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1630157051334-e302a5fe8947?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    thumbUrl: '',
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    thumbUrl: '',
  },
];

const AlbumScreen = ( { navigation, route}) => {
  console.log("Photo input", route);

  const [isOpen, setIsOpen] = useState(true);
  const [albumName, setAlbumName] = useState(route.params.albumName);

  // const openGallery = (image) => {
  //   setSelectedImageIndex(image);
  //   setIsOpen(true);
  // };

  const closeGallery = () => {
    setIsOpen(false);
    navigation.navigate('AlbumGridScreen', {albumName: albumName})
  };

  const renderHeaderComponent = (_image, currentIndex) => {
    return <Header currentIndex={currentIndex} albumName={albumName} />;
  };

  const renderFooterComponent = (_image, currentIndex) => {
    return <Footer total={images.length} currentIndex={currentIndex} />;
  };

  const renderCustomImage = (image) => {
    return (
      <View style={styles.customImageContainer}>
        <Image
          resizeMode="cover"
          source={{uri: image.url}}
          style={styles.customImage}
          thumbnailSource="https://via.placeholder.com/350x150"
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.screen} 
    onTouchStart={e=> this.touchY = e.nativeEvent.pageY}
    onTouchEnd={e => {
      if (this.touchY - e.nativeEvent.pageY > 20)
      {
        console.log('Swiped up');
        // setIsOpen(false);
        closeGallery();
        // hideAlbumView(true);
        navigation.navigate('PhotoScreen', {selectedImageIndex: route.params.selectedImageIndex});
      }
    }}>
         <ImageGallery
          close={closeGallery}
          images={images}
          isOpen={isOpen}
          initialIndex={route.params.selectedImageIndex}
          renderCustomImage={renderCustomImage}
          renderFooterComponent={renderFooterComponent}
          renderHeaderComponent={renderHeaderComponent}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  customImageContainer: {
    alignItems: 'center',
    borderRadius: 11,
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 24,
    width: '100%',
  },
  customImage: {
    borderColor: 'grey',
    borderRadius: 20,
    borderWidth: 3,
    height: 300,
    overflow: 'hidden',
    width: 300,
  },
});

export default AlbumScreen;
