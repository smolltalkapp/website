// @flow
import React from 'react';
import Jumbotron from './Jumbotron';

type Props = {};
class HomePage extends React.PureComponent<Props> {
  render() {
    return (
      <div>
        <Jumbotron />
      </div>
    );
  }
}

export default HomePage;
