// @flow
import React from 'react';
import './homeStyle.css';

const OverviewSection = () => (
  <section id="section2" className="overview container">
    <h2 className="sixteen columns">A simpler way to connect.</h2>
    <p className="sub-heading twelve columns offset-by-four">
      Match and connect with people around the world that share the same interests as
      you, have great conversations and share them with friends.
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
        matched on, and all chats are anonymous.
      </p>
    </div>
    <div className="content-box one-third column">
      <img src="images/icons/share.png" alt="" />
      <h3>Share</h3>
      <p>
        Having an interesting conversation with someone? Invite your friends to eavesdrop
        on your conversation.
      </p>
    </div>
  </section>
);
export default OverviewSection;
