import React from 'react'
import {Link, Route, useParams} from 'react-router-dom';
import Comments from '../components/comments/Comments'

function QuoteDetail() {

    const params = useParams();

  return (
    <div>
        <h1>Details</h1>
        <p>{params.quoteID}</p>
        <Route path={`/quotes/${params.quoteID}/comments`}>
            <Comments />
        </Route>
    </div>
  )
}

export default QuoteDetail;