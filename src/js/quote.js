import { API_PROPS } from './api/api';
import axios from 'axios';
import Notiflix from 'notiflix';

const { BASE_URL, QUOTE_ENDPOINT } = API_PROPS;

async function fetchQuote() {
  try {
    const response = await axios.get(`${BASE_URL}${QUOTE_ENDPOINT}`);
    return response.data;
  } catch {
    Notiflix.Notify.failure('Please try again.');
    return {};
  }
}

async function updateQuote() {
  const today = new Date();
  const savedDate = localStorage.getItem('quoteDate');
  if (savedDate !== today) {
    const data = await fetchQuote();
    if (data) {
      localStorage.setItem('quote', data.quote);
      localStorage.setItem('author', data.author);
      localStorage.setItem('quoteDate', today);
      return data;
    }
  }
  return {};
}

async function displayInfo() {
  const quoteData = await updateQuote();
  const quoteElement = document.querySelector('.quote');
  const authorElement = document.querySelector('.author');
  quoteElement.textContent = quoteData.quote;
  authorElement.textContent = quoteData.author;
}

displayInfo();
