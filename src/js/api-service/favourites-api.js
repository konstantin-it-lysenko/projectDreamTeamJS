import { API_PROPS } from '../api/api';
import axios from 'axios';

const { BASE_URL, QUOTE_ENDPOINT } = API_PROPS;

async function getQuote() {
  const resp = await axios(`${BASE_URL}${QUOTE_ENDPOINT}`);
  return resp.data;
}

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

export { getQuote, save, load };
