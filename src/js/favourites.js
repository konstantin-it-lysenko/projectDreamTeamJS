import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { createMarkup } from './markup';
import { getQuote, save, load } from './api-service/favourites-api';

const refs = {
  quote: document.querySelector('.favor-quote-wrap p'),
  quoteAuthor: document.querySelector('.favor-quote-wrap h4'),
};

async function getCurrentQuote() {
  const quote = load('quote-current-day');
  const date = new Date().toDateString();
  if (quote && date === quote.quoteDate) {
    console.log(date);
    console.log(quote.quoteDate);
    refs.quote.textContent = quote.quote;
    refs.quoteAuthor.textContent = quote.author;
  } else {
    const currentQuote = await getQuote();
    currentQuote.quoteDate = date;
    refs.quote.textContent = currentQuote.quote;
    refs.quoteAuthor.textContent = currentQuote.author;
    save('quote-current-day', currentQuote);
  }
}

getCurrentQuote();
