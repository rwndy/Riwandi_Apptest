/* eslint-disable prettier/prettier */
import { 
  REQUEST_GET_DATA,
  REQUEST_DELETE_DATA,
  REQUEST_UPDATE_DATA,
  GET_DATA,
  GET_DATA_BY_ID,
  UPDATE_DATA,
  DELETE_DATA,
  REQUEST_CREATE_DATA,
  CREATE_DATA,
  CREATE_DATA_FAILED,
  GET_DATA_BY_ID_FAILED,
  GET_DATA_FAILED,
  UPDATE_DATA_FAILED,
  DELETE_DATA_FAILED,
  REQUEST_GET_DATA_BY_ID,
} from "../../action.types";

import axios from "axios";
import { URL_API } from '../../../config'
const url = URL_API;

export const createContact = fields => async dispatch => {
  try {
    dispatch({type: REQUEST_CREATE_DATA});
    const response = await axios.post(`${url}`, fields);
    const result = response.data;
    console.log(result)
    dispatch({type: CREATE_DATA, payload: result});
  } catch (error) {
    dispatch({type: CREATE_DATA_FAILED, payload: error});
  }
}

export const getContacts = () => async dispatch => {
  try {
    dispatch({type: REQUEST_GET_DATA});
    const response = await axios.get(`${url}`);
    const results = response.data;
    dispatch({type: GET_DATA, payload: results.data});
  } catch (error) {
    dispatch({type: GET_DATA_FAILED, payload: error});
  }
}

export const getContactByID = id => async dispatch => {
  try {
    dispatch({type: REQUEST_GET_DATA_BY_ID});
    const response= await axios.get(`${url}/${id}`);
    const results = response.data;
    
    dispatch({type: GET_DATA_BY_ID, payload: results.data});
  } catch (error) {
    dispatch({type: GET_DATA_BY_ID_FAILED, payload: error});
  }
}

export const updateContact = (fields, id) => async dispatch => {
  try {
    dispatch({type: REQUEST_UPDATE_DATA})
    const response = await axios.put(`${url}/${id}`, fields)
    const result = response.data
    dispatch({type: UPDATE_DATA, payload: result})
  } catch (error) {
    dispatch({type: UPDATE_DATA_FAILED})
  }
}

export const deleteContact = id => async dispatch => {
  try {
    dispatch({type: REQUEST_DELETE_DATA})
    const response = await axios.delete(`${url}/${id}`)
    const result = response.data
    dispatch({type: DELETE_DATA, payload: result})
  } catch (error) {
    dispatch({type: DELETE_DATA_FAILED, payload: error})
  }
}