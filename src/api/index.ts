import axios from './axiosInstance';
import {appConfigClient} from './graphqlClient';
import {configQuery} from './querys';

const getProfile = async () => {
  const res = await axios.get('/profile');
  return res.data;
};

const login = async () => {
  const res = await axios.get('/login');
  return res.data;
};

const getConfig = async () => {
  const res = await appConfigClient.query({query: configQuery});
  return res.data;
};

export {getConfig, getProfile, login};
