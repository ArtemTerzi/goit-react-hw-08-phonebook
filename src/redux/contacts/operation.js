import { createAsyncThunk } from '@reduxjs/toolkit';
import { publicInstance } from 'services/tokenAPI';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await publicInstance.get('contacts');
  return response.data;
});

export const createContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await publicInstance.post('contacts', contact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await publicInstance.delete(`contacts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
