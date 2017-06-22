import React, { Component } from 'react';

export default class ProfileCard extends Component {
  render() {

    return (
      <div className="card gaamit-card">
        <img className="rounded-circle img-circle mt-5" src="http://teamzone-gaming.com/wp-content/uploads/2016/05/Durotan-Warcraft.0.0.jpg" alt=""/>
        <div className="card-block">
          <h4 className="card-title">Michele</h4>
          <p className="card-text">Gaamit Knight</p>
        </div>
      </div>
    );
  }
}
