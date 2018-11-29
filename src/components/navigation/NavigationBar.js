/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
// / @flow
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from 'root/resource/images/LogoName2.png';
import './styles.css';

type Props = {};
type State = {
  isNavFixed: boolean,
};
export default class NavigationBar extends React.PureComponent<Props, State> {
  navBar: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      isNavFixed: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollPositionY = +window.scrollY;
    if (this.navBar) {
      if (scrollPositionY >= this.navBar.clientHeight) {
        this.setState({ isNavFixed: true });
      } else if (scrollPositionY === 0) {
        this.setState({ isNavFixed: false });
      }
    }
  };

  renderNavLink = (path: string, label: string) => (
    <NavLink to={`/${path}`} className="navLink" activeClassName="activeNavLink">
      {label}
    </NavLink>
  );

  render() {
    const { isNavFixed } = this.state;

    return (
      <div
        className="navBar"
        ref={ref => {
          this.navBar = ref;
        }}
      >
        <a href="/">
          <img src={logo} alt="Logo" className="navLogoName" />
        </a>
        <div className="navLinkContainer">
          {this.renderNavLink('terms', 'Terms and Conditions')}
          {this.renderNavLink('privacy', 'Privacy Policy')}
          {this.renderNavLink('safety', 'Safety')}
          {this.renderNavLink('community', 'Community Guidelines')}
        </div>
        {isNavFixed ? (
          <a href="#top" className="toTopButton">
            Back to Top
          </a>
        ) : null}
      </div>
    );
  }
}
