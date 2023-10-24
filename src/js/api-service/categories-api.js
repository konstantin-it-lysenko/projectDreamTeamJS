import axios from 'axios';
import { API_PROPS } from '../api/api';

const { BASE_URL, FILTERS_ENDPOINT } = API_PROPS;

let limit = window.innerWidth < 768 ? 9 : 12;

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
