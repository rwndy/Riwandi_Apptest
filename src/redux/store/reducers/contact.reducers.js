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
  REQUEST_GET_DATA_BY_ID
} from "../../action.types";

const initialState = {
  data: [],
  message: null,
  isError: false,
  isLoading: false,
  dataById: null
};

export default function contactReducers (state = initialState, action) {
  switch (action.type) {
    case REQUEST_GET_DATA:
      return {
        ...state,
        isLoading: true
      };
    case GET_DATA:
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.message,
        data: action.payload
      };
    case GET_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.message
      };
    case REQUEST_CREATE_DATA:
      return {
        ...state,
        isLoading: true
      };
    case CREATE_DATA:
      return {
        ...state,
        isLoading: false,
        isError: false,
        mesasge: action.payload.message
      };
    case CREATE_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload
      };
    case REQUEST_UPDATE_DATA:
      return {
        ...state,
        isLoading: true
      };
    case UPDATE_DATA:
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.message
      };
    case UPDATE_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    case REQUEST_DELETE_DATA:
      return {
        ...state,
        isLoading: true
      };
    case DELETE_DATA:
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload,
      };
    case DELETE_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload
      };
    case REQUEST_GET_DATA_BY_ID:
      return {
        ...state,
        isLoading: true
      };
    case GET_DATA_BY_ID:
      return {
        ...state,
        dataById: action.payload,
        isLoading: false,
        isError: false
      };
    case GET_DATA_BY_ID_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload
      };
    default:
      return state;
  }
}