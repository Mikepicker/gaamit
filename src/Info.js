import React, { Component } from 'react';
import './Info.css';

export default class Posts extends Component {
  render() {

    return (
      <div className="container col-md-8 mt-3">
        <div className="card mb-3 gaamit-card">
          <div className="card-block">
            <h4 className="card-title">What? Another fund-raising platform?</h4>
            <hr/>
            <p className="card-text">The answer is just <strong>no</strong>. Let's go straight to the point:<br/><strong>are you a game developer?</strong> Perfect, publish your content on Gaamit and get revenues from your fans upvotes and comments.<br/>
            <strong>You're not a developer but you like games?</strong> Excellent, follow people you like, engage on their posts and get repaid for it.</p>
          </div>
        </div>
        <div className="card mb-3 gaamit-card">
          <div className="card-block">
            <h4 className="card-title">How can it be possible?</h4>
            <hr/>
            <p className="card-text"><strong>Ever wondered how all the major social networks get all of those money even if you've never spent a single buck on them?</strong><br/>Well, a wise man once said: <i>"if you're not paying for the product, you are the product"</i>.<br/><br/>
            Indeed, <strong>whatever you post on a social network <u>is</u> value</strong>. Every time people see a post, like it, comment on it, share it, they're amplifying its value. Social networks are easily able to exchange that value with real currencies
            by advertising, selling preferences to third parties and so on.<br/><br/>Therefore, it is quite safe to assume that whenever you post your awesome game progress on social networks <strong>you are literally giving away your content value</strong>.
            So, how really Gaamit overcomes this?<br/><br/>Steemit to the rescue!</p>
          </div>
        </div>
        <div className="card mb-3 gaamit-card">
          <div className="card-block">
            <h4 className="card-title">Gaamit <div className="fa fa-heart-o"/> Steemit</h4>
            <hr/>
            <p className="card-text">Gaamit is built on top of a very interesting platform called Steemit:<br/><br/>"Steemit is a social network that looks and functions a lot like Reddit, but with one HUGE difference: Steemit pays both the content creators when
            their work gets upvoted, as well as the people who curate the best content on the site by upvoting others work." (<a href="https://www.quora.com/What-is-STEEM-and-how-does-it-work">source</a>).<br/><br/>This is possible thanks to a new cryptocurrency called Steem. <strong>The more you create valuable content, the more Steem you earn.</strong>
            Since the Steem cryptocurrency is tradeable with other currencies, you can exchange it for "real" currencies (euro or dollars, for instance).</p>
          </div>
        </div>
      </div>
    );
  }
}
