/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ListContacts = ({name, age, avatar, id}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Contact Detail', {id})}>
      <Image source={{uri: avatar}} style={styles.avatar} />
      <View>
        <Text>Name: {name}</Text>
        <Text>Age: {age} Years Old</Text>
      </View>
    </TouchableOpacity>
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