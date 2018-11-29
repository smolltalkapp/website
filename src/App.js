// @flow
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  HomePage,
  PrivacyPage,
  TermsPage,
  SafetyPage,
  CommunityPage,
  ErrorPage,
} from './pages';

type Props = {};
// eslint-disable-next-line react/prefer-stateless-function
class App extends Component<Props> {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/privacy" component={PrivacyPage} exact />
            <Route path="/terms" component={TermsPage} exact />
            <Route path="/safety" component={SafetyPage} exact />
            <Route path="/community" component={CommunityPage} exact />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
