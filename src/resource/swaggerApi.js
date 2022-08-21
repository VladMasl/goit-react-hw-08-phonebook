import axios from 'axios';

const url = { DATABASE: 'https://connections-api.herokuapp.com' };

const setBaseUrl = url => (axios.defaults.baseURL = url);

const saveToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerApi = async userData => {
  setBaseUrl(url.DATABASE);
  return await axios.post('/users/signup', userData).then(({ data }) => {
    saveToken.set(data.token);
    return data;
  });
};

export const logInApi = async userData => {
  setBaseUrl(url.DATABASE);
  return await axios.post('/users/login', userData).then(({ data }) => {
    saveToken.set(data.token);
    return data;
  });
};

export const logOutApi = async persistedToken => {
  setBaseUrl(url.DATABASE);
  await axios.post('/users/logout');
  saveToken.unset();
};

export const getCurrentUserApi = async persistedToken => {
  setBaseUrl(url.DATABASE);
  saveToken.set(persistedToken);
  const { data } = await axios.get('/users/current');
  return data;
};

export const getContactsApi = async () => {
  setBaseUrl(url.DATABASE);
  return await axios.get('/contacts').then(({ data }) => {
    return data;
  });
};

export const addContactsApi = async contact => {
  setBaseUrl(url.DATABASE);
  return await axios.post('/contacts', contact).then(({ data }) => {
    return data;
  });
};

export const deleteContactsApi = async id => {
  setBaseUrl(url.DATABASE);
  return await axios.delete(`/contacts/${id}`).then(({ data }) => {
    return data;
  });
};
