import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  registerApi,
  logInApi,
  logOutApi,
  getCurrentUserApi,
} from '../../resource/swaggerApi';

export const register = createAsyncThunk(
  'register',
  async (userData, thunkApi) => {
    try {
      const data = await registerApi(userData);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const logIn = createAsyncThunk('logIn', async (userData, thunkApi) => {
  try {
    const data = await logInApi(userData);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('logOut', async (_, thunkApi) => {
  try {
    logOutApi();
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const getCurrentUser = createAsyncThunk(
  'getCurrentUser',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return rejectWithValue();
    }

    try {
      const data = getCurrentUserApi(persistedToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
