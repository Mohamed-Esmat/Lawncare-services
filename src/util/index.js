import axios from 'axios';

const Url = 'http://upskilling-egypt.com:3000/contact';
export const customFetch = axios.create({
  baseURL: Url,
});
