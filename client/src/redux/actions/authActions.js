import axios from 'axios';
import {
  REGISTER_ERROR,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  SET_AGE,
  SET_EMAIL,
  SET_GENDER,
  SET_NAME,
} from '../types';

export const register = userData => {
  return async dispatch => {
    dispatch({type: REGISTER_REQUEST});
    try {
      const session = await axios.post(
        'http://localhost:4000/auth/register',
        userData,
      );
      dispatch({type: REGISTER_SUCCESS, payload: session});
    } catch (error) {
      console.log(error.message, 'hgata');
      dispatch({type: REGISTER_ERROR, payload: error});
    }
  };
};

export const setName = name => ({
  type: SET_NAME,
  payload: name,
});

export const setEmail = email => ({
  type: SET_EMAIL,
  payload: email,
});

export const setAge = age => ({
  type: SET_AGE,
  payload: age,
});

export const setGender = gender => ({
  type: SET_GENDER,
  payload: gender,
});
