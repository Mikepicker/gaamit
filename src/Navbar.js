import React, { Component } from 'react';
import './Navbar.css';

export default class Navbar extends Component {
  render() {

    return (
      <nav id="gaamit-navbar" className="navbar fixed-top navbar-toggleable-md navbar-inverse bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-brand" onClick={() => this.props.changePage('created')}>Gaamit</div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className={'nav-item ' + (this.props.page === 'info' ? 'active' : null)}>
              <div className="nav-link" onClick={() => this.props.changePage('info')}>How it works</div>
            </li>
            <li className={'nav-item ' + (this.props.page === 'login' ? 'active' : null)}>
              <div className="nav-link" onClick={() => this.props.changePage('login')}>Login</div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input id="gaamit-search" className="form-control mr-sm-2" type="text" placeholder="Search"/>
            <div id="gaamit-btn-search" className="fa fa-search"/>
          </form>
        </div>
      </nav>
    );
  }
}
