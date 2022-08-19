import axios from 'axios';

const url = { DATABASE: 'https://62fbc814abd610251c1109e3.mockapi.io' };

const setBaseUrl = url => (axios.defaults.baseURL = url);

export const getContactsApi = async () => {
  setBaseUrl(url.DATABASE);
  return await axios.get('/contacts').then(({ data }) => data);
};

export const addContactsApi = async contact => {
  setBaseUrl(url.DATABASE);
  return await axios.post('/contacts', contact).then(({ data }) => data);
};

export const deleteContactsApi = async id => {
  setBaseUrl(url.DATABASE);
  return await axios.delete(`/contacts/${id}`).then(({ data }) => data);
};
