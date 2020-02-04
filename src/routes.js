import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import LoginForm from './components/login/LoginForm';

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/login" component={LoginForm} />
      </Switch>
    </div>
  )
}
