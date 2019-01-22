// @flow
import React from 'react';
import HeroSection from './HeroSection';
import OverviewSection from './OverviewSection';
import GallerySection from './GallerySection';
import DownloadSection from './DownloadSection';

type Props = {};
class HomePage extends React.PureComponent<Props> {
  render() {
    return (
      <div>
        <HeroSection />
        <OverviewSection />
        <GallerySection />
        <DownloadSection />
      </div>
    );
  }
}

export default HomePage;
