import React, { Component } from 'react';
import Post from './Post.js'
import './Posts.css';

export default class Posts extends Component {
  render() {

    let posts = [];
    let key = 0;
    for (var content in this.props.feed) {
      let data = this.props.feed[content];

      // Filter non-english
      if (data && !data.body.match(/[^\x00-\x7F]+/g)) {
        posts.push(
          <Post key={key++}
                id={content}
                title={data.title}
                author={data.author}
                lastUpdate={data.last_update}
                image={JSON.parse(data.json_metadata).image}
                body={data.body}
                changePage={this.props.changePage}/>
        );
      }
    }

    return (
      <div id="gaamit-posts" className="container col-md-8">
        {posts}
      </div>
    );
  }
}
