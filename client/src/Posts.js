import React, { Component } from 'react';
import Post from './Post.js'
import Loading from './Loading.js';
import { chunk, values } from 'lodash';
import './Posts.css';

export default class Posts extends Component {

  onClickTab = (e, page) => {
    if (this.props.page === page) {
      return;
    }

    console.log(e.type);
    e.preventDefault();
    e.stopPropagation();
    this.props.changePage(page);
  }

  renderPills = () => {
    return (
      <div className="card gaamit-card pt-2 pb-2 mb-3">
        <ul className="nav nav-pills justify-content-center">
          <li className="nav-item">
            <div className={'nav-link ' + (this.props.page === 'home' ? 'active' : null)} onClick={(e) => this.onClickTab(e, 'created')}>Home</div>
          </li>
          <li className="nav-item">
            <div className={'nav-link ' + (this.props.page === 'created' ? 'active' : null)} onClick={(e) => this.onClickTab(e, 'created')}>New</div>
          </li>
          <li className="nav-item">
            <div className={'nav-link ' + (this.props.page === 'hot' ? 'active' : null)} onClick={(e) => this.onClickTab(e, 'hot')}>Hot</div>
          </li>
          <li className="nav-item">
            <div className={'nav-link ' + (this.props.page === 'trending' ? 'active' : null)} onClick={(e) => this.onClickTab(e, 'trending')}>Trending</div>
          </li>
        </ul>
      </div>
    );
  }

  render() {

    let posts = [];
    let key = 0;
    for (let content in this.props.feed) {
      let data = this.props.feed[content];

      // Filter non-english
      if (data && !data.body.match(/[^\x00-\x7F]+/g)) {
        posts.push(
          <div key={key++} className="col-6 col-md-6 col-lg-4 p-0">
            <Post id={content}
                  title={data.title}
                  author={data.author}
                  lastUpdate={data.last_update}
                  image={JSON.parse(data.json_metadata).image}
                  body={data.body}
                  changePage={this.props.changePage}/>
          </div>);
      }
    }

    // Loading
    if (!this.props.feed) {
      posts = <Loading/>
    }

    return (
      <div>
        {this.renderPills()}
        <div className="container mt-2">
          <div className="row">
            {posts}
          </div>
        </div>
      </div>
    );
  }
}
