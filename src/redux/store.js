import { configureStore } from '@reduxjs/toolkit';
import items from './contacts/contactsSlice';


const store = configureStore({
  reducer: {
    contacts: items,
  },
});

export { store };
