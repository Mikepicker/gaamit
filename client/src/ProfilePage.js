import React, { Component } from 'react';
import { Button } from 'reactstrap';
import DescriptionCard from './DescriptionCard.js';
import NetworkCard from './NetworkCard.js';
import Post from './Post.js';
import './ProfilePage.css';

export default class ProfilePage extends Component {
  render() {
    return (
      <div>
        <div id="profile-banner">
          <img id="profile-banner-img" src="https://static.pexels.com/photos/443356/pexels-photo-443356.jpeg" alt="profile banner"/>
          <div id="profile-headline">
            <img id="profile-avatar" className="rounded-circle" src="http://teamzone-gaming.com/wp-content/uploads/2016/05/Durotan-Warcraft.0.0.jpg"/>
            <h1 id="profile-title">Mike <small>@mikepicker</small></h1>
          </div>
          <Button id="profile-follow" outline color="primary" className="gaamit-button mr-1 mb-1">Follow</Button>
        </div>

        <div id="profile-sub-banner"/>

        <div className="row mt-3">

          <div className="col-md-4 mb-3">
            <DescriptionCard/>
          </div>

          <div className="col-md-4 p-0">
            <Post key={0}
                  id={1}
                  title={'My new game is online!'}
                  author={'Mike'}
                  lastUpdate={'now'}
                  image={['https://static.pexels.com/photos/18174/reflection-pad-gaming-gamepad.jpg']}
                  body={'<p>Hello</p>'}
                  changePage={this.props.changePage}/>

              <Post key={1}
                    id={1}
                    title={'Development Blog - #1'}
                    author={'Mike'}
                    lastUpdate={'now'}
                    image={['https://static.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg']}
                    body={'<p>Hello</p>'}
                    changePage={this.props.changePage}/>

                <Post key={2}
                      id={1}
                      title={'Title'}
                      author={'Mike'}
                      lastUpdate={'now'}
                      image={['https://static.pexels.com/photos/443356/pexels-photo-443356.jpeg']}
                      body={'<p>Hello</p>'}
                      changePage={this.props.changePage}/>
          </div>

          <div className="col-md-4">
            <NetworkCard/>
          </div>

        </div>
      </div>
    );
  }
}
