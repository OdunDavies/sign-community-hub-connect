
import React from 'react';
import ProfileCard from './ProfileCard';

const SignAffiliates = () => {
  const affiliates = [
    {
      username: 'realyanxin',
      displayName: 'YanXin',
      bio: 'Crypto enthusiast and DeFi researcher. Building the future of finance.',
      avatar: 'https://pbs.twimg.com/profile_images/1820434778995638272/QJQJQJQJ_400x400.jpg',
      url: 'https://x.com/realyanxin',
      followers: '12.5K'
    },
    {
      username: '_biggids',
      displayName: 'BigGids',
      bio: 'Founder of @signAcademy. Teaching crypto and Web3 fundamentals.',
      avatar: 'https://pbs.twimg.com/profile_images/1820434778995638272/QJQJQJQJ_400x400.jpg',
      url: 'https://x.com/_biggids',
      followers: '8.3K'
    },
    {
      username: 'lucky_of_web3',
      displayName: 'Lucky Web3',
      bio: 'Web3 developer and blockchain advocate. Smart contract specialist.',
      avatar: 'https://pbs.twimg.com/profile_images/1820434778995638272/QJQJQJQJ_400x400.jpg',
      url: 'https://x.com/lucky_of_web3',
      followers: '6.7K'
    },
    {
      username: 'tokentable',
      displayName: 'TokenTable',
      bio: 'Token analytics and market insights. Data-driven crypto analysis.',
      avatar: 'https://pbs.twimg.com/profile_images/1820434778995638272/QJQJQJQJ_400x400.jpg',
      url: 'https://x.com/tokentable',
      followers: '15.2K'
    },
    {
      username: 'angelofweb3_',
      displayName: 'Angel of Web3',
      bio: 'Crypto investor and community builder. Bridging traditional finance with DeFi.',
      avatar: 'https://pbs.twimg.com/profile_images/1820434778995638272/QJQJQJQJ_400x400.jpg',
      url: 'https://x.com/angelofweb3_',
      followers: '9.1K'
    },
    {
      username: 'roguescholarbro',
      displayName: 'Rogue Scholar',
      bio: 'Crypto researcher and market analyst. Deep dives into blockchain technology.',
      avatar: 'https://pbs.twimg.com/profile_images/1820434778995638272/QJQJQJQJ_400x400.jpg',
      url: 'https://x.com/roguescholarbro',
      followers: '11.8K'
    },
    {
      username: 'tajudeen_10',
      displayName: 'Tajudeen',
      bio: 'DeFi protocol developer and smart contract auditor.',
      avatar: 'https://pbs.twimg.com/profile_images/1820434778995638272/QJQJQJQJ_400x400.jpg',
      url: 'https://x.com/tajudeen_10',
      followers: '5.4K'
    },
    {
      username: '0xzoe_im',
      displayName: 'Zoe',
      bio: 'NFT creator and digital artist. Exploring the intersection of art and blockchain.',
      avatar: 'https://pbs.twimg.com/profile_images/1820434778995638272/QJQJQJQJ_400x400.jpg',
      url: 'https://x.com/0xzoe_im',
      followers: '7.9K'
    },
    {
      username: 'himesama_01',
      displayName: 'Hime Sama',
      bio: 'Crypto trader and technical analyst. Sharing market insights and strategies.',
      avatar: 'https://pbs.twimg.com/profile_images/1820434778995638272/QJQJQJQJ_400x400.jpg',
      url: 'https://x.com/himesama_01',
      followers: '13.6K'
    },
    {
      username: 'trojan_bus1',
      displayName: 'Trojan Bus',
      bio: 'Blockchain security researcher and white-hat hacker.',
      avatar: 'https://pbs.twimg.com/profile_images/1820434778995638272/QJQJQJQJ_400x400.jpg',
      url: 'https://x.com/trojan_bus1',
      followers: '4.2K'
    },
    {
      username: 'truthonchained',
      displayName: 'Truth OnChained',
      bio: 'On-chain analyst and transparency advocate. Exposing crypto truths.',
      avatar: 'https://pbs.twimg.com/profile_images/1820434778995638272/QJQJQJQJ_400x400.jpg',
      url: 'https://x.com/truthonchained',
      followers: '16.3K'
    },
    {
      username: 'franstp0',
      displayName: 'Frans TP',
      bio: 'Community manager and social media strategist for crypto projects.',
      avatar: 'https://pbs.twimg.com/profile_images/1820434778995638272/QJQJQJQJ_400x400.jpg',
      url: 'https://x.com/franstp0',
      followers: '8.7K'
    },
    {
      username: '0xbossj',
      displayName: 'Boss J',
      bio: 'Yield farming expert and DeFi protocol specialist.',
      avatar: 'https://pbs.twimg.com/profile_images/1820434778995638272/QJQJQJQJ_400x400.jpg',
      url: 'https://x.com/0xbossj',
      followers: '10.1K'
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold crypto-gradient bg-clip-text text-transparent">
        Sign Affiliates
      </h2>
      <div className="space-y-4 max-h-[800px] overflow-y-auto custom-scrollbar">
        {affiliates.map((affiliate, index) => (
          <div key={affiliate.username} className="animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <ProfileCard {...affiliate} isAffiliate={true} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SignAffiliates;
