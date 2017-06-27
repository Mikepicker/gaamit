import React, { Component } from 'react';
import showdown from 'showdown';
import './PostContent.css';

export default class PostContent extends Component {

  render() {
    console.log(this.props.body);

    let converter = new showdown.Converter();
    let text = this.props.body;
    let body = converter.makeHtml(this.props.body);
    body = body.replace(/<img/gi, '<img class="img-fluid"');

    // Find images
    /*let re = /(\shttps?:\/\/.*\.(?:png|jpg|gif))/gi;
    let match;
    do {
      match = re.exec(body);
      if (match) {
        console.log(match);
        body = body.replace(match[0], '<img class="img-fluid" src="' + match[0] + '" />');
      }
    } while (match);*/

    return (
      <div className="container col-md-12">
        <div className="card mb-3 pt-3 gaamit-card">
          <h4 className="card-title">{this.props.title}</h4>
          <p className="card-title">By <a href={"https://steemit.com/@" + this.props.author}>{this.props.author}</a></p>
        </div>
        <div className="card mb-3 gaamit-card p-2">
          <div dangerouslySetInnerHTML={{ __html: body}} style={{ textAlign: 'left' }}/>
        </div>
      </div>
    );
  }
}
