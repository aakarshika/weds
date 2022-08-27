import * as React from 'react';
import { Text, View, StyleSheet, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { createStackNavigator } from '@react-navigation/stack';

import AlbumListScreen from './pages/AlbumListScreen';
import ActivitiesScreen from './pages/ActivitiesScreen';
import EventsScreen from './pages/EventsScreen';
import HelpScreen from './pages/HelpScreen';
import FunScreen from './pages/FunScreen';
import HomeScreen from './pages/HomeScreen';
import MapScreen from './pages/MapScreen';
import GalleryScreen from './pages/GalleryScreen';

function TabScreen() {
  return (
      <Tab.Navigator 
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#694fad" }} >
        <Tab.Screen name="Home" component={HomeScreen} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-lightning-bolt" color={color} size={26} />
          ),
        }}/>
        <Tab.Screen name="Gallery" component={GalleryScreen} 
        options={{
          tabBarLabel: 'Gallery',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="image-multiple" color={color} size={26} />
          ),
        }}/>
        <Tab.Screen name="Map" component={MapScreen} 
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="google-maps" color={color} size={26} />
          ),
        }}/>
        <Tab.Screen name="Activities" component={ActivitiesScreen} 
        options={{
          tabBarLabel: 'Activities',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="human-female-dance" color={color} size={26} />
          ),
        }}/>
        <Tab.Screen name="Events" component={EventsScreen} 
        options={{
          tabBarLabel: 'Events',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar-multiple-check" color={color} size={26} />
          ),
        }}/>
        <Tab.Screen name="Fun" component={FunScreen} 
        options={{
          tabBarLabel: 'Fun',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="ticket" color={color} size={26} />
          ),
        }}/>
        <Tab.Screen name="Help" component={HelpScreen} 
        options={{
          tabBarLabel: 'Help',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="information-outline" color={color} size={26} />
          ),
        }}/>
      </Tab.Navigator>
  );
}
function InitScreen() {

const navigation = useNavigation();
  return (
    <View>
      <Button
        title={`Go to Home`}
      onPress={() => navigation.navigate('TabScreen')}
      />
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

    <RootStack.Navigator 
      screenOptions={{
        headerShown: false
      }}>
      <RootStack.Group>
        <RootStack.Screen name="InitScreen" component={InitScreen} />
        <RootStack.Screen name="TabScreen" component={TabScreen} />
        <RootStack.Screen name="GalleryScreen" component={GalleryScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
    </NavigationContainer>
  );
}

