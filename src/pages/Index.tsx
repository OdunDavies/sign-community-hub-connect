
import React from 'react';
import Header from '../components/Header';
import SignAffiliates from '../components/SignAffiliates';
import LatestUpdates from '../components/LatestUpdates';
import CreatorsSection from '../components/CreatorsSection';
import MyContributions from '../components/MyContributions';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Layout */}
      <div className="container mx-auto px-6 py-8">
        {/* Affiliates and Updates Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Latest Updates - 2/3 width */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <LatestUpdates />
          </div>
          
          {/* Sign Affiliates - 1/3 width */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            <SignAffiliates />
          </div>
        </div>

        {/* Creators Section */}
        <div className="mb-16">
          <CreatorsSection />
        </div>

        {/* My Contributions Section */}
        <div className="mb-16">
          <MyContributions />
        </div>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-border/50">
          <div className="crypto-gradient bg-clip-text text-transparent font-semibold">
            SignCommunityHub - Building the Future Together
          </div>
          <p className="text-muted-foreground text-sm mt-2">
            Powered by the Sign Community • Made with ❤️ by EmLord
          </p>
        </footer>
      </div>

      {/* Floating Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 crypto-button rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-xl transition-all z-10"
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  );
};

export default Index;
