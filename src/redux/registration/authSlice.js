import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, getCurrentUser } from './authOperations';

let initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  loading: false,
  error: null,
  isFetchCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: {
    [register.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [register.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [register.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.loading = false;
    },
    [logIn.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [logIn.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.loading = false;
    },

    [logOut.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [logOut.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [logOut.fulfilled]: state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.loading = false;
      state.isFetchCurrentUser = false;
    },
    [getCurrentUser.pending]: state => {
      state.loading = true;
      state.error = null;
      state.isFetchCurrentUser = true;
    },
    [getCurrentUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.isFetchCurrentUser = false;
    },
    [getCurrentUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
      state.loading = false;
      state.isFetchCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
