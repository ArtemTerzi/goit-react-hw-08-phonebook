import {
  publicInstance,
  setAuthHeader,
  clearAuthHeader,
} from 'services/tokenAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const register = createAsyncThunk(
  'users/signUp',
  async (body, thunkAPI) => {
    try {
      const response = await publicInstance.post('users/signup', body);
      setAuthHeader(response.data.token);
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
      const response = await publicInstance.post('users/login', body);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logout = createAsyncThunk('users/logout', async (_, thunkAPI) => {
  try {
    await publicInstance.post('users/logout');
    clearAuthHeader();
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(persistedToken);
      const response = await publicInstance.get('users/current');
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
