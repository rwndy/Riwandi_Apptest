/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getContactByID } from '../../redux/store/actions';
import { useForm, Controller } from "react-hook-form";
import { FormEditContact } from '../../components';
import { updateContact, deleteContact } from '../../redux/store/actions';
import { useNavigation } from '@react-navigation/native';

const DetailContact = ({route}) => {
  const id = route?.params?.id;
  const dispatch = useDispatch();
  const { dataById } = useSelector(state => state.contacts);
  const [action, setAction] = useState(null);
  const [idNumber, setId] = useState(null)
  const { 
    control, 
    handleSubmit, 
    formState: { errors }, 
    reset,
    setValue,
    getValues 
  } = useForm();
  
  const config = {
    uri: dataById?.photo,
    width: 300,
    height: 200,
  };

  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getContactByID(id));
  }, [id, dispatch]);

  const onHandleEdit = (data) => {
    setAction('update');
    setValue('firstName', data?.firstName);
    setValue('lastName', data?.lastName);
    setValue('age', data?.age.toString());
    setValue('photo', data?.photo);
    setId(data?.id);
  };

  const onEdit = () => {
    const { firstName, lastName, age, photo } = getValues();
    const fields = {
      firstName,
      lastName,
      age: parseInt(age),
      photo,
    };
    dispatch(updateContact(fields, idNumber));
    reset();
    navigation.navigate('Home');
  };

  const onDelete = () => {
    dispatch(deleteContact(id));
    navigation.navigate('Home');
    Alert.alert('Contact berhasil dihapus');
  };

  return (
    <>
    {
      action === 'update' 
      ? (
          <FormEditContact
            Controller={Controller}
            control={control}
            errors={errors}
            onUpdate={handleSubmit(onEdit)}
          />
        )
      : (
        <View style={styles.container}>
     
        <View style={styles.wrapperImage}>
          <Image source={config}/>
        </View>
        <View>
          <Text style={styles.detailText}>Full name: {`${dataById?.firstName} ${dataById?.lastName}`}</Text>
          <Text style={styles.textAge}>Age: {dataById?.age} years old</Text>
        </View>
  
        <View style={styles.wrapperButton}>
          <TouchableOpacity style={styles.editButton} onPress={() => onHandleEdit(dataById)}>
            <Text style={styles.textButton}>Edit</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
            <Text style={styles.deleteTextButton}>Delete</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      )
    }
    </>
    
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