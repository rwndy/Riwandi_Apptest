/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CreateButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Create Contact')}>
      <Text style={styles.addButtonText}>
        +
      </Text>
    </TouchableOpacity>
  );
};

export default CreateButton;

const styles = StyleSheet.create({
 
    addButton: {
      position: 'absolute',
      bottom: 98,
      right: 20,
      backgroundColor: '#3282B8',
      width: 90,
      height: 90,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 8,
      zIndex: 11,
    },
  addButtonText: {
    color: '#fff',
    fontSize: 32,
  }
})