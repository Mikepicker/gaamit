import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {

  render() {
    return (
        <div id="gaamit-posts" className="container col-md-8 mt-3">
            <div className="card gaamit-card">
              <div className="card-block">
                <h4 className="card-title">Join Gaamit!</h4>
                  <form className="form-signin">
                    <input type="text" className="form-control" placeholder="Email" required autoFocus/>
                    <input type="password" className="form-control" placeholder="Password" required/>
                    <button className="btn btn-lg btn-primary btn-block mt-3 gaamit-login-btn" type="submit">Log in</button>
                    <h3 className="card-text mt-3 mb-3">Or</h3>
                    <button className="btn btn-lg btn-primary btn-block mt-3 gaamit-login-btn" type="submit">Sign up</button>
                    <a href="#" className="pull-right need-help mt-3">Forgot password? </a><span className="clearfix"></span>
                  </form>
              </div>
            </div>
          </div>
    );
  }
}
