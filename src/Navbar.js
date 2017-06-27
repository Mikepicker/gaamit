import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './Navbar.css';
import logo from './gaamit_logo.svg';

export default class Navbar extends Component {
  render() {

    return (
      <div>
        <nav id="gaamit-navbar" className="navbar fixed-top navbar-toggleable-md navbar-inverse bg-faded">
          <div className="container">
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

              <img className="rounded-circle img-circle-nav ml-3 mr-3" src="http://teamzone-gaming.com/wp-content/uploads/2016/05/Durotan-Warcraft.0.0.jpg" alt="" onClick={() => this.props.changePage('profile')}/>

              <Button outline id="gaamit-btn-post" color="primary" className="pt-2 pb-2">New Post</Button>

            </div>
          </div>
        </nav>
        <img src={logo} id="gaamit-navbar-logo" alt="logo"/>
      </div>
    );
  }
}
