import * as api from './../../shared/services/apiContacts';

import {
  fetchAllContactsLoading,
  fetchAllContactsSuccess,
  fetchAllContactsError,
  fetchAddContactLoading,
  fetchAddContactSuccess,
  fetchAddContactError,
  fetchDeleteContactLoading,
  fetchDeleteContactSuccess,
  fetchDeleteContactError,
} from './contactsActions';

export const fetchAllContacts = () => {
  const func = async dispatch => {
    try {
      dispatch(fetchAllContactsLoading());
      const data = await api.getAllContacts();
      console.log(data);
      dispatch(fetchAllContactsSuccess(data));
    } catch ({ response }) {
      dispatch(fetchAllContactsError(response.data.message));
    }
  };
  return func;
};

export const fetchAddContact = data => {
  const func = async dispatch => {
    try {
      dispatch(fetchAddContactLoading());
      const result = await api.addContact(data);
      dispatch(fetchAddContactSuccess(result));
    } catch ({ response }) {
      dispatch(fetchAddContactError(response.data.message));
    }
  };
  return func;
};

export const fetchDeleteContact = id => {
  const func = async dispatch => {
    try {
      dispatch(fetchDeleteContactLoading());
      await api.deleteContact(id);
      dispatch(fetchDeleteContactSuccess(id));
    } catch (error) {
      dispatch(fetchDeleteContactError(error.message));
    }
    console.log(id);
  };
  return func;
};
