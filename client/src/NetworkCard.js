import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class NetworkCard extends Component {
  render() {

    return (
      <div>

        <div className="card gaamit-card">
          <h4 className="card-title mt-2">Follow more Devs</h4>

          <div className="gaamit-separator"/>

          <div className="container">
            <div className="row pr-2 pt-2 pb-2">
              <div className="col-md-4">
                <img className="rounded-circle img-circle-thumb" src="https://s-media-cache-ak0.pinimg.com/736x/83/34/f5/8334f5875bf8d261ab64cd2df6d49c86--warcraft--world-of-warcraft.jpg" alt=""/>
              </div>
              <div className="col-md-8">
                <div className="row">
                  <h4 style={{ textAlign: 'left' }}>Linux <span style={{ fontSize: '16px', color: '#888' }}>@lino</span></h4>
                </div>
                <div className="row">
                  <Button size="sm" outline color="primary" className="gaamit-button-outline pt-0 pb-0">Follow</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="gaamit-separator"/>

          <div className="container">
            <div className="row pr-2 pt-2 pb-2">
              <div className="col-md-4">
                <img className="rounded-circle img-circle-thumb" src="https://s-media-cache-ak0.pinimg.com/736x/3e/4a/85/3e4a85ebe332e26c6fc1991b6ab67b49--small-feather-tattoos-male-elf.jpg" alt=""/>
              </div>
              <div className="col-md-8">
                <div className="row">
                  <h4 style={{ textAlign: 'left' }}>Luke <span style={{ fontSize: '16px', color: '#888' }}>@ilbarone623</span></h4>
                </div>
                <div className="row">
                  <Button size="sm" outline color="primary" className="gaamit-button-outline pt-0 pb-0">Follow</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="gaamit-separator"/>

          <div className="container">
            <div className="row pr-2 pt-2 pb-2">
              <div className="col-md-4">
                <img className="rounded-circle img-circle-thumb" src="http://www.wallpaperup.com/uploads/wallpapers/2013/06/03/97080/f10722d6659bc8255009358ca5aa67ae.jpg" alt=""/>
              </div>
              <div className="col-md-8">
                <div className="row">
                  <h4 style={{ textAlign: 'left' }}>Jade <span style={{ fontSize: '16px', color: '#888' }}>@myours</span></h4>
                </div>
                <div className="row">
                  <Button size="sm" outline color="primary" className="gaamit-button-outline pt-0 pb-0">Follow</Button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
