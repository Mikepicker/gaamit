import React, { Component } from 'react';
import './NetworkCard.css';

export default class NetworkCard extends Component {
  render() {

    return (
      <div className="card gaamit-card">
        <div className="card-block row">
          <div className="col-md-4">
            <img className="img-gaamit-network rounded-circle" src="http://teamzone-gaming.com/wp-content/uploads/2016/05/Durotan-Warcraft.0.0.jpg" alt=""/>
          </div>
          <p className="gaamit-network-text card-text col-md-4 mt-1">Lino</p>
          <button type="button" className="btn btn-gaamit-follow col-md-4">Follow</button>
        </div>
      </div>
    );
  }
}
