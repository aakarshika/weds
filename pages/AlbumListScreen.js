import React from 'react';
import { StyleSheet,TouchableOpacity, View, Text } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { useNavigation } from '@react-navigation/native';

const AlbumListScreen = ({navigation, route}) => {

  const [items, setItems] = React.useState([
  {
    id: "0",
    code: '#1abc9c',
    title: "Recents",
    picture: require('../assets/starry.jpeg')
    
  },
  {
    id: "1",
    code: '#e74c3c',
    title: "Invitation",
    picture: require('../assets/starry.jpeg')
    
  },
  {
    id: "2",
    code: '#f1c40f',
    title: "The Road So Far",
    picture: require('../assets/starry.jpeg')
    
  },
  {
    id: "3",
    code: '#2ecc71',
    title: "Watchya Wearin",
    picture: require('../assets/starry.jpeg')
    
  },
  {
    id: "4",
    code: '#3498db',
    title: "Goldy Oldies",
    picture: require('../assets/starry.jpeg')
    
  },
  {
    id: "5",
    code: '#9b59b6',
    title: "Milestone Messages",
    picture: require('../assets/starry.jpeg')
    
  }
]);

return (
    <FlatGrid
      itemDimension={130}
      data={items}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
          <Text style={styles.itemName}>{item.title}</Text>
          <Text style={styles.itemCode}>{item.code}</Text>

            <TouchableOpacity
              onPress={() => 
                // this.props.navigation.navigate('AlbumGridScreen')}
              navigation.navigate('AlbumGridScreen', {albumName: item.title})}
            >
              <Text>yo</Text>
            </TouchableOpacity>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
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
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});

export default AlbumListScreen;