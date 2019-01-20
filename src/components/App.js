import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import WelcomePage from './Welcome';
import ChatPage from './ChatPage';

const App = ({ classes }) => (
    <Router>
        <Switch>
          <Route exact path="/(welcome)?" component={WelcomePage} />
          <Route path="/chat" component={ChatPage} />
          <Redirect to="/" />
        </Switch>
    </Router>
  );

export default App;
