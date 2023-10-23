import axios from 'axios';
import { API_PROPS } from './api/api';

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
        showErrorPage();
      }
    } else {
      const quoteElement = document.querySelector('.quote');
      const authorElement = document.querySelector('.author');
      quoteElement.textContent = storedData.quote;
      authorElement.textContent = storedData.author;
    }
  } catch (error) {
    showErrorPage();
  }
}

function showErrorPage() {
  const appContainer = document.getElementById('app');
  const errorPageContainer = document.getElementById('sidebar-error');

  appContainer.style.display = 'none';
  errorPageContainer.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () {
  fetchAndDisplayQuote();
});
