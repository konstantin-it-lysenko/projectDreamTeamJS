import { API_PROPS } from './api/api';
import axios from 'axios';
import Notiflix from 'notiflix';

const { BASE_URL, QUOTE_ENDPOINT } = API_PROPS;

async function fetchAndDisplayQuote() {
  try {
    const today = new Date();
    const todayDateString = today.toDateString();
    const storedData = JSON.parse(localStorage.getItem('quoteData'));

    if (!storedData || todayDateString !== storedData.quoteDate) {
      const response = await axios.get(`${BASE_URL}${QUOTE_ENDPOINT}`);
      const data = response.data;

      if (data && data.quote && data.author) {
        const quoteAndAuthor = {
          quote: data.quote,
          author: data.author,
          quoteDate: todayDateString,
        };

        localStorage.setItem('quoteData', JSON.stringify(quoteAndAuthor));

        const quoteElement = document.querySelector('.quote');
        const authorElement = document.querySelector('.author');

        quoteElement.textContent = data.quote;
        authorElement.textContent = data.author;
      } else {
        Notiflix.Notify.failure('Пожалуйста, попробуйте снова.');
      }
    } else {
      const quoteElement = document.querySelector('.quote');
      const authorElement = document.querySelector('.author');
      quoteElement.textContent = storedData.quote;
      authorElement.textContent = storedData.author;
    }
  } catch (error) {
    Notiflix.Notify.failure('Пожалуйста, попробуйте снова.');
  }
}

fetchAndDisplayQuote();
