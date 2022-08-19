import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContacts, deleteContacts } from './contactOperations';

const contactsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    filter: '',
    isLoading: false,
    error: null,
  },
  reducers: {
    changeFilter(state, { payload }) {
      return { ...state, filter: payload };
    },
  },
  extraReducers: {
    [getContacts.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [getContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [getContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    },
    [addContacts.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [addContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [addContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = [...state.items, payload];
    },
    [deleteContacts.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = state.items.filter(item => item.id !== payload.id);
    },
  },
});

export const { changeFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
