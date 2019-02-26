// @flow
import React from 'react';
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
