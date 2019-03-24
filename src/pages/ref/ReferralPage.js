// @flow
import React from 'react';
import { Helmet } from 'react-helmet';

const ReferralPage = () => (
  <div className="contentBody referralpage mobileBody">
    <Helmet>
      <title>SmollTalk | Referral</title>
      <meta property="og:title" content="SmollTalk | Referral " />
      <meta property="og:url" content="https://smolltalk.com/ref" />
    </Helmet>
    <h1>Referral Bonus</h1>
    <p>
      You clicked on a linked that entitles you for a referral bonus which{' '}
      <b>increases your #interest slots by 1</b>!
    </p>
    <p>
      Just open the link again on your mobile device and you should be able to download
      or claim the bonus during the sign up process.
    </p>
  </div>
);
export default ReferralPage;
