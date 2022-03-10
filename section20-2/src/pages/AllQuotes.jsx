import React from 'react'
import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  {id: 'q1', author: 'Filip', text: 'learning react is fun!'},
  {id: 'q2', author: 'Filip', text: 'learning react is awesome!'},
  {id: 'q3', author: 'Filip', text: 'learning react is amazing!'},
]

function AllQuotes() {
  return (
      <QuoteList quotes={DUMMY_QUOTES} />
  )
}

export default AllQuotes;