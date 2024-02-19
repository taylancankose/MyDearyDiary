import {
  REGISTER_ERROR,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  SET_AGE,
  SET_EMAIL,
  SET_GENDER,
  SET_NAME,
} from '../types';

const initialState = {
  name: '',
  email: '',
  age: null,
  gender: '',
  user: [],
  accessToken: null,
  error: null,
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
        error: null,
      };
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
        error: null,
      };
    case SET_AGE:
      return {
        ...state,
        age: action.payload,
        error: null,
      };
    case SET_GENDER:
      return {
        ...state,
        gender: action.payload,
        error: null,
      };
    case REGISTER_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default authReducer;
