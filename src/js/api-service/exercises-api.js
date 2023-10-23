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

  return response.data;
}

export async function fetchAllExercises(
  category,
  bodyPart,
  perPage,
  totalPages
) {
  const params = new URLSearchParams({
    [category]: bodyPart,
    limit: perPage * totalPages,
  });

  const categoriesUrl = `${BASE_URL}${EXERCISE_ENDPOINT}?${params}`;
  const response = await axios.get(categoriesUrl);

  return response.data.results;
}
