import axios from "axios";

import { API_PROPS } from '../api/api';

const { BASE_URL, EXERCISE_ENDPOINT, RATING_ENDPOINT } = API_PROPS;




export async function postRatting(id, userData) {        
    return axios.patch(`${BASE_URL + EXERCISE_ENDPOINT}/${id}${RATING_ENDPOINT}`, userData);

  }


  