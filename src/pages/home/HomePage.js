// @flow
import React from 'react';
import { Helmet } from 'react-helmet';
import VideoIntroSection from './VideoIntroSection';
import HeroSection from './HeroSection';
import OverviewSection from './OverviewSection';
import HowItWorksSection from './HowItWorksSection';
import AddFriendSection from './AddFriendSection';
import ManageInterestSection from './ManageInterestSection';
import EavesdropSection from './EavesdropSection';
import GallerySection from './GallerySection';
import DownloadSection from './DownloadSection';

type Props = {};
class HomePage extends React.PureComponent<Props> {
  render() {
    return (
      <div>
        <Helmet>
          <title>SmollTalk | Connect Meaningfully</title>
          <meta property="og:title" content="SmollTalk | Connect Meaningfully " />
          <meta property="og:url" content="https://smolltalk.com/" />
        </Helmet>
        <HeroSection />
        <VideoIntroSection />
        <OverviewSection />
        <HowItWorksSection />
        <AddFriendSection />
        <ManageInterestSection />
        <EavesdropSection />
        <GallerySection />
        <DownloadSection />
      </div>
    );
  }
}

export default HomePage;
