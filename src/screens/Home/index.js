/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View, StyleSheet, StatusBar, FlatList, ActivityIndicator} from 'react-native';
import { ListContacts, CreateButton } from '../../components';
import useSWR from "swr";
import fetcher from '../../utils/fetcher';
import { URL_API } from '../../config';

const HomeScreen = () => {

  const { data: contacts } = useSWR(URL_API, fetcher);

  console.log('fetch', contacts?.data)

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#3282B8'} translucent />
      {
        !contacts 
        ? <ActivityIndicator size="large" />
        : (
          <FlatList 
            data={contacts?.data}
            renderItem={({item}) => (
              <ListContacts name={item?.firstName} avatar={item?.photo} age={item?.age} />
            )}
            keyExtractor={item => item.id}
          />
        )
      }
      <CreateButton />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B262C',
    paddingTop: 40,
    position: 'relative',
  },
  title: {
    color: '#fff',
    fontSize: 20,
  },
});
