// @flow
import React from 'react';
import logo from 'root/resource/images/LogoName.png';
import './styles.css';

type Props = {};
export default class Jumbotron extends React.PureComponent<Props> {
  render() {
    return (
      <div className="jumboContainer">
        <div className="jumboImage" />
        <div className="jumboTextContainer">
          <img src={logo} alt="Logo Name" className="jumboLogoName" />
          <h2 className="slogan">Great friendships start with #smolltalk</h2>
          <div className="comingSoonContainer">
            <h1 className="comingSoonText">Coming Soon...</h1>
          </div>
        </div>
      </div>
    );
  }
}
