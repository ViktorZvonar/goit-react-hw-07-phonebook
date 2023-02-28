import { createSlice } from '@reduxjs/toolkit';
import * as actions from './contactsActions';

const initialState = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    [actions.fetchAllContactsLoading]: store => {
      store.loading = true;
    },

    [actions.fetchAllContactsSuccess]: (store, { payload }) => {
      store.loading = false;
      store.items = payload;
    },
    [actions.fetchAllContactsError]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    [actions.fetchAddContactLoading]: store => {
      store.loading = true;
    },

    [actions.fetchAddContactSuccess]: (store, { payload }) => {
      store.loading = false;
      store.items.push(payload);
    },
    [actions.fetchAddContactError]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    [actions.fetchDeleteContactLoading]: store => {
      store.loading = true;
    },

    [actions.fetchDeleteContactSuccess]: (store, { payload }) => {
      store.loading = false;
      const index = store.items.findIndex(item => item.id !== payload);
      store.items.splice(index, 1);
    },
    [actions.fetchDeleteContactError]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default contactsSlice.reducer;
