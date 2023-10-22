import { API_PROPS } from './api/api';
import axios from 'axios';
import Notiflix from 'notiflix';

const { BASE_URL, QUOTE_ENDPOINT } = API_PROPS;

async function fetchAndDisplayQuote() {
  try {
    const response = await axios.get(`${BASE_URL}${QUOTE_ENDPOINT}`);
    const data = response.data;
    if (data && data.quote && data.author) {
      const today = new Date();
      localStorage.setItem('quote', data.quote);
      localStorage.setItem('author', data.author);
      localStorage.setItem('quoteDate', today);
      const quoteElement = document.querySelector('.quote');
      const authorElement = document.querySelector('.author');
      quoteElement.textContent = data.quote;
      authorElement.textContent = data.author;
    } else {
      Notiflix.Notify.failure('Please try again.');
    }
  } catch (error) {
    Notiflix.Notify.failure('Please try again.');
  }
}

fetchAndDisplayQuote();
