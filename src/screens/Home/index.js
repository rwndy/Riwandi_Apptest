/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#1B262C'} translucent />
      <Text style={styles.title}>Home Alone</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1B262C',
  },
  title: {
    color: '#fff',
    fontSize: 20,
  },
});
