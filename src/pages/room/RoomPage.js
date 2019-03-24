// @flow
import React from 'react';
import { Helmet } from 'react-helmet';

const RoomPage = () => (
  <div className="contentBody roompage mobileBody">
    <Helmet>
      <title>SmollTalk | Eavesdrop</title>
      <meta property="og:title" content="SmollTalk | Eavesdrop " />
      <meta property="og:url" content="https://smolltalk.com/room/" />
    </Helmet>
    <h1>Eavesdropping</h1>
    <p>
      To eavesdrop on a chat, you need to click on the link again on your mobile device.
      This will start the SmollTalk app and bring you to the chat.
    </p>
  </div>
);
export default RoomPage;
