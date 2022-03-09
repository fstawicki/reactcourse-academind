import React from 'react'
import {Route} from 'react-router-dom';

function Welcome() {
  return (
    <section>
      <div>Welcome</div>
      <Route path="/welcome/new-user">
        <p>welcome new user</p>
      </Route>


    </section>

  )
}

export default Welcome;