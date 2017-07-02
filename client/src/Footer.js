import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div id="gaamit-footer">
        <p id="gaamit-footer-text">Developed with <span className="fa fa-heart-o"/> by <a href="http://steemit.com/@mikepicker">@mikepicker</a> and <a href="http://steemit.com/@lino">@lino</a></p>
      </div>
    );
  }
}
