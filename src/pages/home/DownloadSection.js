// @flow
import React from 'react';

const DownloadSection = () => (
  <section id="download" className="download container">
    <h2>Download the App now!</h2>
    <p className="sub-heading twelve columns offset-by-four">
      We can't wait to welcome you to the SmollTalk community! We hope your time with us
      is going to be a fun, interesting and engaging. Most importantly, we hope you can
      leave with a friend or two :)
    </p>
    <ul className="download-list clearfix">
      <li>
        <a
          href="http://itunes.apple.com/app/id1447333301"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="images/download-appstore.png" alt="" />
        </a>
      </li>
      <li>
        <a
          href="https://play.google.com/store/apps/details?id=com.smolltalk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="images/download-playstore.png" alt="" />
        </a>
      </li>
    </ul>
  </section>
);
export default DownloadSection;
