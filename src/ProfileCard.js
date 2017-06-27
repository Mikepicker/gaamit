import React, { Component } from 'react';
import { Tooltip, Progress, Button } from 'reactstrap';
import './ProfileCard.css';

export default class ProfileCard extends Component {
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
        <img className="rounded-circle img-circle mt-3 mb-3" src="http://teamzone-gaming.com/wp-content/uploads/2016/05/Durotan-Warcraft.0.0.jpg" alt=""/>
        <div className="gaamit-separator"/>
        <div className="card-block">
          <h4 className="card-title">Michele</h4>
          <p className="card-text" style={{ color: '#888' }}>@mikepicker</p>
          <div id="gaamit-voting-power">
            <Progress className="gaamit-progress" bar color="success" value="80"/>
          </div>
          <Tooltip placement="left" isOpen={this.state.tooltipOpen} target="gaamit-voting-power" toggle={this.toggle}>
            Voting Power
          </Tooltip>
          <Button className="gaamit-button mt-3" onClick={() => this.props.changePage('profile')}>Your Page</Button>
        </div>
      </div>
    );
  }
}
