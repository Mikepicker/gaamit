import React, { Component } from 'react';
import './Loading.css';
import loading from './loading.svg';

export default class Loading extends Component {
  render() {
    return (
      <div>
        <img src={loading} className="gaamit-loading" alt="loading" />
      </div>
    );
  }
}
