import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContactsApi,
  addContactsApi,
  deleteContactsApi,
} from '../../resource/moskApi';

export const getContacts = createAsyncThunk(
  'getContacts',
  async (_, thunkApi) => {
    try {
      const contacts = await getContactsApi();
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'addContacts',
  async (object, thunkApi) => {
    try {
      const renewalContact = await addContactsApi(object);
      return renewalContact;
    } catch (error) {
      return thunkApi.rejectWithValue(error.massage);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'deleteContacts',
  async (id, thunkApi) => {
    try {
      const contacts = await deleteContactsApi(id);
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.massage);
    }
  }
);
