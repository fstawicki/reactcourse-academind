import React from 'react';
import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';

function NewQuote() {

  const history = useHistory();


  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);

    //push dodaje nową stronę na stack więc można wrócić na poprzednią
    //replace zamioenia stronę więc nie można z niej wrócić
    history.push('/quotes')
  }

  return (
    <QuoteForm onAddQuote={addQuoteHandler} />
  )
}

export default NewQuote;