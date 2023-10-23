import axios from 'axios';
import { API_PROPS } from '../api/api';

const { BASE_URL, EXERCISE_ENDPOINT, FILTERS_ENDPOINT } = API_PROPS;

let limit = 9;

export async function fetchCategories(category = 'Body parts', page = 1) {
  const params = new URLSearchParams({
    filter: category,
    limit,
    page,
  });

  const categoriesUrl = `${BASE_URL}${FILTERS_ENDPOINT}?${params}`;
  const response = await axios.get(categoriesUrl);

  return response.data;
}
