import { API_PROPS } from '../api/api';
import axios from 'axios';

const { BASE_URL, EXERCISE_ENDPOINT } = API_PROPS;

let limit = 8;

export async function fetchExercises(category, bodyPart, page = 1) {
  const params = new URLSearchParams({
    [category]: bodyPart,

    limit,
    page,
  });

  const categoriesUrl = `${BASE_URL}${EXERCISE_ENDPOINT}?${params}`;
  const response = await axios.get(categoriesUrl);

  return response.data.results;
}

export async function fetchAllExercises(category, bodyPart) {
  const params = new URLSearchParams({
    [category]: bodyPart,
    limit: 100,
  });

  const categoriesUrl = `${BASE_URL}${EXERCISE_ENDPOINT}?${params}`;
  const response = await axios.get(categoriesUrl);

  return response.data.results;
}
