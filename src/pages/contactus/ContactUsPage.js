// @flow
import React from 'react';
import { Helmet } from 'react-helmet';

const ContactUsPage = () => (
  <div className="contentBody contactpage">
    <Helmet>
      <title>SmollTalk | Contact Us</title>
      <meta property="og:title" content="SmollTalk | Contact Us " />
      <meta property="og:url" content="https://smolltalk.com/contact" />
    </Helmet>
    <h1>Contact Us</h1>
    <p>
      If you have any issues or inquiries about our services, feel free to contact us at{' '}
      <a href="mailto:support@smolltalk.com">support@smolltalk.com</a>
    </p>
    <p>
      For business related issues, reach us at{' '}
      <a href="mailto:business@smolltalk.com">business@smolltalk.com</a>
    </p>
    <p>
      To connect with the developers, reach out to{' '}
      <a href="mailto:developer@smolltalk.com">developer@smolltalk.com</a>
    </p>
  </div>
);
export default ContactUsPage;
