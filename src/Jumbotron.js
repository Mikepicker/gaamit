import React, { Component } from 'react';
import './Jumbotron.css';

export default class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Sustain your games with your fans upvotes</h1>
        <p>You are wondering how it is possible, right? Thanks to Gaamit your posts acquire value that you can transform in real money</p>
        <p><a id="btn-learn-more" className="btn btn-primary btn-lg" onClick={() => this.props.changePage('info')}>Learn more</a></p>
      </div>
    );
  }
}
