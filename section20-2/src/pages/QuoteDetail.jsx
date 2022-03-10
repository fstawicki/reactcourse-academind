import React, { Fragment } from 'react'
import {Route, useParams} from 'react-router-dom';
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  {id: 'q1', author: 'Filip', text: 'learning react is fun!'},
  {id: 'q2', author: 'Filip', text: 'learning react is awesome!'},
  {id: 'q3', author: 'Filip', text: 'learning react is amazing!'},
]

function QuoteDetail() {

    const params = useParams();

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteID);

    if (!quote){
      return alert('no quopte found!');
    }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />

        <Route path={`/quotes/${params.quoteID}/comments`}>
            <Comments />
        </Route>
    </Fragment>
  )
}

export default QuoteDetail;