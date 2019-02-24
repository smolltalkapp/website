// @flow
import React from 'react';
import './homeStyle.css';

const OverviewSection = () => (
  <section id="section2" className="overview container">
    <h2 className="sixteen columns">1 Click, 1 Friend</h2>
    <p className="sub-heading twelve columns offset-by-four">
      Well realistically, NOT every person can be a friend, but that doesn't mean you
      should stop looking! Add your interests, and we'll connect you with someone that
      shares the same interests as you, all with One Click!
    </p>
    <br className="clear" />
    <div className="content-box one-third column">
      <img src="images/icons/search.png" alt="" />
      <h3>Match</h3>
      <p>
        Using filters and the interests you specify, our algorithms instantly match you
        with the people that fit those criteria.
      </p>
    </div>
    <div className="content-box one-third column">
      <img src="images/icons/chat.png" alt="" />
      <h3>Chat</h3>
      <p>
        Once matched, you will begin chatting. We'll let you know what #interests you
        matched on.
      </p>
    </div>
    <div className="content-box one-third column">
      <img src="images/icons/friend.png" alt="" />
      <h3>Add Friends</h3>
      <p>
        Having an interesting conversation with someone? Why not add them as a friend!
      </p>
    </div>
  </section>
);
export default OverviewSection;
