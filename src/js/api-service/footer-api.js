import { API_PROPS } from '../api/api';
import axios from 'axios';
const { BASE_URL, SUBSCR_EDPOINT } = API_PROPS;

export function fetchPostApi(subscriptionData) {
  return axios.post(`${BASE_URL}${SUBSCR_EDPOINT}`, subscriptionData, {
    // headers: {
    //   'Content-Type': 'application/json',
    // },
  });
}
