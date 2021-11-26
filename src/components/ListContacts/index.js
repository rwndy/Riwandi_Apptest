/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import { ScrollView, FlatList, Image, Text, View, StyleSheet } from 'react-native';

const ListContacts = ({name, age, avatar}) => {

  return (
    <View style={styles.container}>
      <Image source={{uri: avatar}} style={styles.avatar} />
      <View>
        <Text>Name: {name}</Text>
        <Text>Age: {age} Years Old</Text>
      </View>
    </View>
  );
};

export default ListContacts;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  avatar: {
    borderRadius: 50,
    overflow: 'hidden',
    width: 50,
    height: 50,
    marginRight: 10,
  },
});