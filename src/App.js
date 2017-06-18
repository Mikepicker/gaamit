import React, { Component } from 'react';
import Header from './Header.js';
import Navbar from './Navbar.js';
import Jumbotron from './Jumbotron.js';
import Sidebar from './Sidebar.js';
import Posts from './Posts.js'
import PostContent from './PostContent.js'
import Info from './Info.js';
import Loading from './Loading.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: '',
      feed: null,
      postContent: ''
    }
  }

  componentDidMount = () => {
    this.changePage('created');
  }

  changePage= (newPage, params) => {

    // Feed categories
    if (newPage === 'created' || newPage === 'hot' || newPage === 'trending') {
      this.fetchCategory(newPage);
      this.setState({
        feed: null
      });
    }

    // Show post content
    if (newPage === 'post') {
      this.setState({
        postContent: params
      });
    }

    this.setState({
      page: newPage
    });

  }

  fetchCategory = (category) => {
    fetch(`https://api.steemjs.com/getState?path=/${category}/gamedev`).then((response) => {
      return response.json();
    }).then((json) => {console.log(json);

      this.setState({
        feed: json.content
      });
    });
  }

  render() {

    // Current page
    let pageTag;
    if (this.state.page === 'created' || this.state.page === 'hot' || this.state.page === 'trending') {
      pageTag =
      <div>
        <Posts feed={this.state.feed} changePage={this.changePage}/>
      </div>

    } else if (this.state.page === 'info') {
      pageTag = <Info/>
    } else if (this.state.page === 'post') {
      let postContentBody = this.state.feed ? this.state.feed[this.state.postContent] : '';
      if (postContentBody) {
        postContentBody = postContentBody.body;
        pageTag = <PostContent show={this.state.showPostContent}
                               title={this.state.feed[this.state.postContent].title}
                               author={this.state.feed[this.state.postContent].author}
                               body={postContentBody}/>
      }
    }

    // Loading
    if (!this.state.feed) {
      pageTag = <Loading/>
    }

    return (
      <div className="App">
        <Navbar page={this.state.page} changePage={this.changePage}/>
        <Header/>
        <Jumbotron changePage={this.changePage}/>
        {pageTag}
      </div>
    );
  }
}

export default App;
