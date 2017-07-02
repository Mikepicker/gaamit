import React, { Component } from 'react';
import { Tooltip, Progress } from 'reactstrap';

export default class DescriptionCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tooltipOpen: false
    };
  }

  toggle = () => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {

    return (
      <div className="card gaamit-card">
        <div className="card-block">
          <p className="card-title">I'm a cool guy. Creator of Warkraft V and Smyrym. I love coffee, dogs, kittens and video games.</p>
          <p><i className="fa fa-map-marker"/> Irvine - California</p>
          <p><i className="fa fa-calendar-o"/> Joined 27-10-2016</p>
          <p><i className="fa fa-link"/> <a href="http://www.michelerullo.com">www.mmichelerullo.com</a></p>
        </div>
      </div>
    );
  }
}
