/* eslint-disable prettier/prettier */
import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

const FormEditContact = ({
  Controller,
  errors,
  control,
  onUpdate,
}) => {
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
          minLength: 3,
          maxLength: 15,
          pattern: {
            value: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
            message: 'Nama tidak boleh mengandung karakter unik dan juga angka!'
          },
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value}
            placeholder="Input your first name here"
          />
        )}
        name="firstName"
      />
      {errors?.firstName && <Text style={styles.errorMessage}>This is required.</Text>}
      {errors?.firstName?.type === "pattern" && errors.firstName && <Text style={styles.errorMessage}>{errors?.firstName?.message}</Text>}
      {errors?.firstName?.type === "minLength" && errors.firstName && <Text style={styles.errorMessage}>Nama harus diisi minimal 3 karakter</Text>}
      {errors?.firstName?.type === "maxLength" && errors.firstName && <Text style={styles.errorMessage}>Nama maksimal hanya 15 karakter</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
          minLength: 3,
          maxLength: 15,
          pattern: {
            value: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
            message: 'Nama tidak boleh mengandung karakter unik dan juga angka!'
          },
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value}
            placeholder="Input your last name here"
          />
        )}
        name="lastName"
      />
      {errors?.lastName && <Text style={styles.errorMessage}>This is required.</Text>}
      {errors?.lastName?.type === "pattern" && errors.lastName && <Text style={styles.errorMessage}>{errors?.lastName?.message}</Text>}
      {errors?.lastName?.type === "minLength" && errors.lastName && <Text style={styles.errorMessage}>Nama harus diisi minimal 3 karakter</Text>}
      {errors?.lastName?.type === "maxLength" && errors.lastName && <Text style={styles.errorMessage}>Nama maksimal hanya 15 karakter</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
          maxLength: 3,
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value}
            placeholder="Input your age here"
            keyboardType='number-pad'
          />
        )}
        name="age"
      />
      {errors?.age && <Text style={styles.errorMessage}>This is required.</Text>}
      {errors?.age?.type === "maxLength" && errors.age && <Text style={styles.errorMessage}>umur hanya bisa diisi 3 digit saja</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
          pattern: {
            value: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi,
            message: 'Harap masukkan URL dengan benar!'
          },
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value}
            placeholder="Input your url photo here"
          />
        )}
        name="photo"
      />
      {errors?.photo && <Text style={styles.errorMessage}>This is required.</Text>}
      {errors?.photo?.type === "pattern" && errors.photo && <Text style={styles.errorMessage}>{errors?.photo?.message}</Text>}

      <TouchableOpacity 
        style={styles.submit}
        onPress={() => onUpdate()}
      >
        <Text style={styles.textSubmit}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormEditContact;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1B262C',
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  errorMessage: {
    fontSize: 12,
    color: '#ef4444',
    paddingBottom: 5
  },
  input: {
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  submit: {
    borderRadius: 10,
    paddingVertical: 20,
    backgroundColor: '#0F4C75',
    marginTop: 20,
  },
  textSubmit: {
    fontSize: 16,
    lineHeight: 16,
    textAlign: 'center',
    color: '#fff',
  }
});