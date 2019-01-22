// @flow
import React from 'react';

const GallerySection = () => (
  <section id="gallery" className="gallery container">
    <h2 className="sixteen columns">The screenshot gallery.</h2>
    <br className="clear" />

    <ul className="gallery-bxslider clearfix">
      <li>
        <div className="one-third column screenshot screenshot">
          <img src="images/gallery/home-screen.png" alt="" />
        </div>
        <div className="one-third column screenshot">
          <img src="images/gallery/match-chat.png" alt="" />
        </div>
        <div className="one-third column screenshot">
          <img src="images/gallery/interest-featured.png" alt="" />
        </div>
      </li>
      <li>
        <div className="one-third column screenshot">
          <img src="images/gallery/interest-trending.png" alt="" />
        </div>
        <div className="one-third column screenshot">
          <img src="images/gallery/eavesdrop-screen.png" alt="" />
        </div>
        <div className="one-third column screenshot">
          <img src="images/gallery/eaves-chat.png" alt="" />
        </div>
      </li>
      <li>
        <div className="one-third column screenshot">
          <img src="images/gallery/friend-list.png" alt="" />
        </div>
        <div className="one-third column screenshot">
          <img src="images/gallery/friend-chat.png" alt="" />
        </div>
        <div className="one-third column screenshot">
          <img src="images/gallery/profile-screen.png" alt="" />
        </div>
      </li>
    </ul>

    <div id="gallery-pager" />
    <div className="small-border" />
  </section>
);
export default GallerySection;
