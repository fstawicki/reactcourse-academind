import { Fragment } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Layout from './components/layout/Layout';
import QuoteForm from './components/quotes/QuoteForm';
import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import NotFound from './pages/NotFound';
import QuoteDetail from './pages/QuoteDetail';

function App() {
  return (
    <Fragment>
      
    <Layout>

    <Switch>
      <Route path='/' exact>
        <Redirect to='/quotes'></Redirect>
      </Route>
      <Route path='/quotes' exact>
        <AllQuotes />
      </Route>
      <Route path='/quotes/:quoteID'>
        <QuoteDetail />
      </Route>
      <Route path='/new-quote'>
        <NewQuote />
      </Route>
      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
    </Layout>
    </Fragment>
  );
}

export default App;
