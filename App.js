/* eslint-disable max-len */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity, FlatList, Image, SafeAreaView} from 'react-native';
import Constants from 'expo-constants';

const mediaArray = [
  {
    key: '0',
    title: 'Title 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    thumbnails: {
      w160: 'http://placekitten.com/160/161',
    },
    filename: 'http://placekitten.com/2048/1920',
  },
  {
    key: '1',
    title: 'Title 2',
    description:
      'Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ',
    thumbnails: {
      w160: 'http://placekitten.com/160/162',
    },
    filename: 'http://placekitten.com/2041/1922',
  },
  {
    key: '2',
    title: 'Title 3',
    description:
      'Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ',
    thumbnails: {
      w160: 'http://placekitten.com/160/163',
    },
    filename: 'http://placekitten.com/2039/1920',
  },
];

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          initialNumToRender={3}
          style={styles.list}
          data={mediaArray}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.item}>
                <Image
                  style={styles.image}
                  source={{uri: item.thumbnails.w160}}
                />
                <View>
                  <Text style={styles.header}>{item.title}</Text>
                  <Text style={styles.text}>{item.description}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    flex: 3,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ccc',
    marginVertical: 4,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {

    height: '90%',
    width: '25%',
  },
  header: {
    fontWeight: 'bold',
  },
  text: {
    flex: 1,
    flexWrap: 'wrap',
  },
});

export default App;
