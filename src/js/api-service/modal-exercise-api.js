import axios from 'axios';
import { API_PROPS } from '../api/api';

const { BASE_URL, EXERCISE_ENDPOINT } = API_PROPS;

export async function fetchExerciseModalById(id) {
  const responce = await axios.get(`${BASE_URL}${EXERCISE_ENDPOINT}/${id}`);
  return responce.data;
}
