import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const authPublicInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const register = createAsyncThunk(
  'users/signUp',
  async (body, thunkAPI) => {
    try {
      const response = await authPublicInstance.post('users/signup', body);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const signIn = createAsyncThunk(
  'users/signIn',
  async (body, thunkAPI) => {
    try {
      const response = await authPublicInstance.post('users/login', body);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
