import * as React from 'react';
import { Text, View, StyleSheet,SafeAreaView, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AlbumGridScreen from './AlbumGridScreen';
import AlbumScreen from './AlbumScreen';
import AlbumListScreen from './AlbumListScreen';
import PhotoScreen from './PhotoScreen';

const RootStack = createStackNavigator();

const GalleryScreen = ({navigation}) => {
  return (

    <SafeAreaView style={{ flex: 1 }}>
    <RootStack.Navigator 
      screenOptions={{
        headerShown: false
      }}>
      <RootStack.Group>
        <RootStack.Screen name="AlbumListScreen" component={AlbumListScreen} />
        <RootStack.Screen name="AlbumGridScreen" component={AlbumGridScreen} />
        <RootStack.Screen name="AlbumScreen" component={AlbumScreen} />
        <RootStack.Screen name="PhotoScreen" component={PhotoScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
    </SafeAreaView>
  );
}

export default GalleryScreen;
