import React, { Component } from 'react';
import './Post.css';

export default class Post extends Component {

  togglePost = () => {
    this.props.changePage('post', this.props.id);
  }

  render() {

    //let image = this.props.body.match(/(https?:\/\/.*\.(?:png|jpg|gif))/i);
    let image = this.props.image;
    let imageTag = image ? <img className="card-img-top img-fluid gaamit-post-image" src={image[0]} alt=""/> : null;
    let authorTag = <a href={"https://steemit.com/@" + this.props.author}>{this.props.author}</a>

    // Date
    let oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    let todayDate = new Date(2008,1,12);
    let postDate = this.props.lastUpdate.split("T")[0];
    /*postDate = new Date(postDate[0], postDate[1], postDate[2]);
    let diffDays = Math.round(Math.abs((todayDate.getTime() - postDate.getTime())/(oneDay)));
    console.log(diffDays);*/

    let title = this.props.title;
    if (title.length > 32) {
      title = this.props.title.substring(0, 32) + '...';
    }

    return (
      <div className="card mb-3 gaamit-card gaamit-post" onClick={() => this.togglePost()}>
        {imageTag}
        <div className="card-block gaamit-post-inner">
          <h6 className="gaamit-card-title card-title">{title}</h6>
          <p className="card-text"><small className="text-muted">By {authorTag}</small></p>
        </div>
      </div>
    );
  }
}
