import React, { Component } from 'react';
import './Sidebar.css';

export default class Sidebar extends Component {
  render() {

    let entries = [];
    console.log(this.props.category);
    if (this.props.category === 'created') {
      entries.push(<h3 key={0} className="card-text gaamit-sidebar-entry" onClick={() => this.props.changeCategory('created')}>New</h3>);
    } else {
      entries.push(<h5 key={0} className="card-text gaamit-sidebar-entry" onClick={() => this.props.changeCategory('created')}>New</h5>);
    }

    if (this.props.category === 'hot') {
      entries.push(<h3 key={1} className="card-text gaamit-sidebar-entry" onClick={() => this.props.changeCategory('hot')}>Hot</h3>);
    } else {
      entries.push(<h5 key={1} className="card-text gaamit-sidebar-entry" onClick={() => this.props.changeCategory('hot')}>Hot</h5>);
    }

    if (this.props.category === 'trending') {
      entries.push(<h3 key={2} className="card-text gaamit-sidebar-entry" onClick={() => this.props.changeCategory('trending')}>Trending</h3>);
    } else {
      entries.push(<h5 key={2} className="card-text gaamit-sidebar-entry" onClick={() => this.props.changeCategory('trending')}>Trending</h5>);
    }

    return (
      <div id="gaamit-sidebar" className="container card col-md-3 gaamit-card">
        <div className="card-block">
          {entries}
        </div>
      </div>
    );
  }
}
