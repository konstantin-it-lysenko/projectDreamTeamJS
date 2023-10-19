import axios from 'axios';
import { API_PROPS } from '../api/api';

let page = 1;
let limit = 100;
const { BASE_URL, EXERCISE_ENDPOINT, FILTERS_ENDPOINT } = API_PROPS;

export async function fetchCategories() {
  const params = new URLSearchParams({
    limit,
    page,
  });

  const categoriesUrl = `${BASE_URL}${FILTERS_ENDPOINT}?${params}`;
  const response = await axios.get(categoriesUrl);

  return response.data.results;
}
