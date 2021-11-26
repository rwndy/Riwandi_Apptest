/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getContactByID } from '../../redux/store/actions';

const DetailContact = ({route}) => {
  const {id} = route.params;
  const dispatch = useDispatch();
  const { dataById } = useSelector(state => state.contacts);
  
  const config = {
    uri: dataById?.photo,
    width: 300,
    height: 200,
  }

  useEffect(() => {
    dispatch(getContactByID(id));
  }, [id, dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.wrapperImage}>
        <Image source={config}/>
      </View>
      <View>
        <Text style={styles.detailText}>Full name: {`${dataById?.firstName} ${dataById?.lastName}`}</Text>
        <Text style={styles.textAge}>Age: {dataById?.age} years old</Text>
      </View>

      <View style={styles.wrapperButton}>
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.textButton}>Edit</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteButton}>
        <Text style={styles.deleteTextButton}>Delete</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  );
};
export default DetailContact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B262C',
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  detailText: {
    color: '#fff',
    fontSize: 24,
    lineHeight: 34
  },
  wrapperImage: {
    alignItems: 'center',
    marginBottom: 20,
  },
  textAge: {
    color: '#fff',
    lineHeight: 26,
    fontSize: 16,
  },
  editButton: {
    backgroundColor: '#3282B8',
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 20,
  },
  textButton: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 24,
    color: '#fff',
  },
  deleteButton: {
    backgroundColor: '#ef4444',
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 20,
  },
  deleteTextButton: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 24,
    color: '#fff',
  },
  wrapperButton: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 140,
  },
});