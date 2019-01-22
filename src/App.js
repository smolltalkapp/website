// @flow
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  HomePage,
  PrivacyPage,
  TermsPage,
  SafetyPage,
  CommunityPage,
  AboutPage,
  ContactUsPage,
  ReferralPage,
  RoomPage,
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
            <Route exact path="/" component={HomePage} />
            <Route path="/privacy" component={PrivacyPage} />
            <Route path="/terms" component={TermsPage} />
            <Route path="/safety" component={SafetyPage} />
            <Route path="/community" component={CommunityPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/ref" component={ReferralPage} />
            <Route path="/room" component={RoomPage} />
            <Route path="/contact" component={ContactUsPage} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
