// @flow
import React from 'react';
import { Helmet } from 'react-helmet';

const AboutPage = () => (
  <div className="contentBody aboutpage mobileBody">
    <Helmet>
      <title>SmollTalk | About Us</title>
      <meta property="og:title" content="SmollTalk | About Us " />
      <meta property="og:url" content="https://smolltalk.com/about/" />
    </Helmet>
    <h1>HI!</h1>
    <p>
      Firstly, if you are using SmollTalk, we wanna thank you from the bottom of our
      hearts for supporting SmollTalk!
    </p>
    <span role="img" aria-label="clap">
      👏👏👏
    </span>
    <br />
    <br />
    <p>If you haven't and are curious about it, why not join in on the fun!</p>
    <h2>Who are we?</h2>
    <p>
      Well, we are a small team (very smoll), making a smoll app, called SmollTalk, that
      hopes to change the world...in a big way.
    </p>
    <p>
      When we set out to build SmollTalk, we wanted to achieve one thing, and one thing
      only - to effectively allow people to connect with each other in a meaningful way.
    </p>
    <p>
      But in order to achieve this, we needed to ask ourselves a very important question
      - What IS the foundation for great friendships?
    </p>
    <h2>Interests</h2>
    <p>
      Interests are quite simply, the reason we feel connected with someone when we get
      to share, talk, and even laugh at the same things in life.
    </p>
    <p>
      So we set out to put interests first, to make it a core part of how people connect
      with each other on SmollTalk. We realized asking you "What's your interests?" is a
      little bit tricky to answer, so intead we provide a platform that aggregates the
      worlds interests, at your fingertips. Easily add interests and start matching with
      others that share the same interests. Connecting and making friends with people
      could never be simpler.
    </p>
    <p>
      With that done, we believed the next element is also essential in building
      meaningful relationships.
    </p>
    <h2>Conversations</h2>
    <p>
      Conversations, dialog, idea exchanges, whatever you call it, it energizes us. For
      users who are connecting with each other, we believe exclusivity is important.
      Matching with someone should feel like both of you are engaged in real life small
      talk. It can be a quick 5 minute conversation about each other's day, or a day long
      conversation about the universe. Whatever the scenario, you should feel like
      whoever you are talking to is present with you.
    </p>
    <p>
      With 7 billion of us on this beautiful planet, there is just so much to learn from
      each other. So we introduced a rather interesting feature.
    </p>
    <h2>Eavesdropping</h2>
    <p>
      Eavesdropping is a way to watch conversations that are happening all around the
      world! Whether you're having an interesting conversation or eavesdropping on one,
      you can easily share that conversation with friends and let them see what you are
      seeing.
    </p>
    <h2>Finally</h2>
    <p>
      We still have a lot of work to do for SmollTalk. We are always curious of the ways
      users use our app, and to hear the interesting stories that come from it!
    </p>
    <p>
      Most importantly, we hope that your time with SmollTalk will be fruitful and
      fulfilling.
    </p>
    <br />
    <i>
      "Friendship is born at that moment when one person says to another: 'What! You too?
      I thought I was the only one."
    </i>
    <br />
    <i>- C.S. Lewis</i>
  </div>
);
export default AboutPage;
