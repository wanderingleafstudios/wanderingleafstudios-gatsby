import React from 'react';
import { Link } from 'gatsby';
import github from '../img/github-icon.svg';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: '',
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            });
      }
    );
  };

  render() {
    return (
      <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <div className="icon">
                <svg enableBackground="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20.505 1.088c-.484.029-11.894.743-15.659 4.503-3.205 3.202-3.702 7.448-1.498 10.92 2.214-2.897 5.777-6.88 10.716-10.334.451-.315 1.076-.207 1.393.246.317.452.207 1.076-.246 1.392-5.041 3.526-8.564 7.597-10.633 10.385-1.037 1.397-1.713 2.475-2.022 2.99-.012.021-.024.04-.035.059-.035.059-.069.116-.092.156-.028.049-.054.095-.063.111-.269.482-.095 1.09.388 1.359.155.084.322.125.486.125.352 0 .692-.185.875-.513.017-.03.71-1.247 2.046-3.046 3.529 2.432 7.942 1.992 11.242-1.305 3.765-3.761 4.479-15.159 4.508-15.643l.089-1.493z"/></svg>
              </div>
            </Link>
            <Link className="navbar-item" to="/">
              Wandering Leaf Studios
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenu" className={`navbar-menu ${this.state.navBarActiveClass}`}>
            <div className="navbar-start has-text-centered">
              {/* <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/services">
                Services
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link> */}
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/wanderingleafstudios/wanderingleafstudios-gatsby"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
