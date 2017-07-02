import React, { Component } from 'react';
import './Header.css';
import logo from './gaamit_logo.svg';

export default class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="gaamit-title">Gaamit</h2>
      </div>
    );
  }
}
