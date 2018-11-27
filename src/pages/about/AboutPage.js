// @flow
import React, { Component } from 'react';
import NavigationBar from 'root/components/navigation/NavigationBar';
import './styles.css';

type Props = {};
class AboutPage extends Component<Props> {
  render() {
    return (
      <div>
        <NavigationBar />
        <div>
          <p>This is the about page!</p>
        </div>
      </div>
    );
  }
}

export default AboutPage;
