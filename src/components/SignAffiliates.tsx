import React from 'react';
import ProfileCard from './ProfileCard';

const SignAffiliates = () => {
  const affiliates = [
    {
      username: 'realyanxin',
      displayName: 'YanXin',
      bio: 'Builder in crypto. Focused on DeFi, infrastructure and making finance more accessible.',
      avatar: 'https://unavatar.io/twitter/realyanxin',
      url: 'https://x.com/realyanxin',
      followers: '12.5K'
    },
    {
      username: '_biggids',
      displayName: 'BigGids',
      bio: 'Founder @signAcademy | Building Web3 education | Teaching the next generation of crypto builders',
      avatar: 'https://unavatar.io/twitter/_biggids',
      url: 'https://x.com/_biggids',
      followers: '8.3K'
    },
    {
      username: 'lucky_of_web3',
      displayName: 'Lucky Web3',
      bio: 'Web3 developer & smart contract specialist | Building the decentralized future | DeFi enthusiast',
      avatar: 'https://unavatar.io/twitter/lucky_of_web3',
      url: 'https://x.com/lucky_of_web3',
      followers: '6.7K'
    },
    {
      username: 'tokentable',
      displayName: 'TokenTable',
      bio: 'Your go-to source for token economics, market analysis & crypto insights | Data-driven research',
      avatar: 'https://unavatar.io/twitter/tokentable',
      url: 'https://x.com/tokentable',
      followers: '15.2K'
    },
    {
      username: 'angelofweb3_',
      displayName: 'Angel of Web3',
      bio: 'Crypto investor & community builder | Bridging traditional finance with DeFi | Angel investing in Web3',
      avatar: 'https://unavatar.io/twitter/angelofweb3_',
      url: 'https://x.com/angelofweb3_',
      followers: '9.1K'
    },
    {
      username: 'roguescholarbro',
      displayName: 'Rogue Scholar',
      bio: 'Independent crypto researcher | Deep dives into blockchain tech | Market analysis & educational content',
      avatar: 'https://unavatar.io/twitter/roguescholarbro',
      url: 'https://x.com/roguescholarbro',
      followers: '11.8K'
    },
    {
      username: 'tajudeen_10',
      displayName: 'Tajudeen',
      bio: 'DeFi protocol developer | Smart contract auditor | Building secure financial infrastructure on-chain',
      avatar: 'https://unavatar.io/twitter/tajudeen_10',
      url: 'https://x.com/tajudeen_10',
      followers: '5.4K'
    },
    {
      username: '0xzoe_im',
      displayName: 'Zoe',
      bio: 'NFT creator & digital artist | Exploring the intersection of art and blockchain | Creative technologist',
      avatar: 'https://unavatar.io/twitter/0xzoe_im',
      url: 'https://x.com/0xzoe_im',
      followers: '7.9K'
    },
    {
      username: 'himesama_01',
      displayName: 'Hime Sama',
      bio: 'Crypto trader & technical analyst | Sharing market insights & trading strategies | DeFi yield farmer',
      avatar: 'https://unavatar.io/twitter/himesama_01',
      url: 'https://x.com/himesama_01',
      followers: '13.6K'
    },
    {
      username: 'trojan_bus1',
      displayName: 'Trojan Bus',
      bio: 'Blockchain security researcher | White-hat hacker | Protecting DeFi protocols from vulnerabilities',
      avatar: 'https://unavatar.io/twitter/trojan_bus1',
      url: 'https://x.com/trojan_bus1',
      followers: '4.2K'
    },
    {
      username: 'truthonchained',
      displayName: 'Truth OnChained',
      bio: 'On-chain analyst & transparency advocate | Exposing crypto truths through data | Blockchain detective',
      avatar: 'https://unavatar.io/twitter/truthonchained',
      url: 'https://x.com/truthonchained',
      followers: '16.3K'
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold crypto-gradient bg-clip-text text-transparent">
        Sign Affiliates
      </h2>
      <div className="space-y-4">
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
