import React from 'react';
import { ExternalLink, Play } from 'lucide-react';
import ClickableImage from './ClickableImage';

const CreatorsSection = () => {
  const creators = [
    {
      username: 'ashu__arts',
      displayName: 'SIGN Artist',
      bio: 'Official NFT artist for @SignProtocol | 50+ collections sold out | Featured in @niftygateway | Pushing boundaries in crypto art',
      avatar: 'https://unavatar.io/twitter/ashu__arts',
      url: 'https://x.com/ashu__arts?s=21',
      artworks: [
        '/lovable-uploads/d62f1627-ba0b-42f1-a36d-53d82aaa6e65.png',
        '/lovable-uploads/57765f81-92b0-47eb-897c-556c40cd27a7.png',
        '/lovable-uploads/60ccb0ff-8270-480f-8366-8647f507be1d.png'
      ]
    },
    {
      username: 'robertlazy23',
      displayName: 'Crypto Visuals',
      bio: 'Creating visual stories in Web3 | Animation Director @SignProtocol | 1M+ views on YouTube | Available for commissions',
      avatar: 'https://unavatar.io/twitter/robertlazy23',
      url: 'https://x.com/robertlazy23?s=21',
      artworks: [
        '/lovable-uploads/5676b947-5bca-423d-bb30-4761827d91fd.png',
        '/lovable-uploads/cc176306-f6a4-47ad-9b13-3e06cc9b51eb.png'
      ]
    },
    {
      username: 'defikelv',
      displayName: 'Kelvin | Metaverse Artist',
      bio: 'Metaverse architect & 3D artist | Building virtual experiences for @SignProtocol | Previously @SandboxGame',
      avatar: 'https://unavatar.io/twitter/defikelv',
      url: 'https://x.com/defikelv?s=21',
      artworks: [
        '/lovable-uploads/5fbf2bd6-f845-4508-825d-2cd8630ddc82.png',
        '/lovable-uploads/478af62f-e60a-46b7-86ea-4c6760b8d1a9.png'
      ],
      hasVideo: true
    },
    {
      username: 'mubi_crypt',
      displayName: 'SIGN Creator',
      bio: 'Content creator & community educator | 500k+ TikTok | Daily SIGN tutorials & updates | Join my Discord for exclusive content',
      avatar: 'https://unavatar.io/twitter/mubi_crypt',
      url: 'https://x.com/mubi_crypt?s=21',
      artworks: []
    },
    {
      username: '_biggids',
      displayName: 'SIGN Academy',
      bio: 'Official education hub of @SignProtocol | Free courses & certifications | Building the next generation of crypto builders',
      avatar: 'https://unavatar.io/twitter/_biggids',
      url: 'https://x.com/_biggids/',
      artworks: [
        '/lovable-uploads/392c2708-17e5-4a5e-8d7d-b3040c339e37.png'
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold crypto-gradient bg-clip-text text-transparent text-center">
        Featured Creators
      </h2>
      
      <div className="grid grid-cols-1 gap-8">
        {creators.map((creator, index) => (
          <div 
            key={creator.username} 
            className="creator-card animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Creator Profile */}
            <div 
              className="flex items-start gap-4 mb-6 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => window.open(creator.url, '_blank')}
            >
              <ClickableImage
                src={creator.avatar}
                alt={creator.displayName}
                className="w-16 h-16 rounded-full object-cover border-2 border-crypto-purple/30"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-lg">{creator.displayName}</h3>
                  <ExternalLink size={16} className="text-crypto-purple" />
                </div>
                <p className="text-crypto-purple text-sm mb-2">@{creator.username}</p>
                <p className="text-muted-foreground text-sm">{creator.bio}</p>
              </div>
            </div>

            {/* Artworks */}
            {creator.artworks.length > 0 && (
              <div className="space-y-4">
                <h4 className="font-semibold text-crypto-purple">Recent Works</h4>
                <div className="grid grid-cols-2 gap-3">
                  {creator.artworks.map((artwork, artIndex) => (
                    <div key={artIndex} className="relative group overflow-hidden rounded-lg">
                      <ClickableImage
                        src={artwork}
                        alt={`Artwork by ${creator.displayName}`}
                        className="w-full h-32 object-cover transition-transform group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  ))}
                  {creator.hasVideo && (
                    <div className="relative group overflow-hidden rounded-lg bg-gradient-to-br from-crypto-purple to-crypto-blue">
                      <div className="w-full h-32 flex items-center justify-center">
                        <Play size={32} className="text-white" />
                      </div>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Special badges */}
            {creator.username === 'mubi_crypt' && (
              <div className="mt-4 flex gap-2">
                <span className="px-3 py-1 bg-crypto-pink/20 text-crypto-pink text-xs rounded-full">
                  TikTok Star
                </span>
                <span className="px-3 py-1 bg-crypto-blue/20 text-crypto-blue text-xs rounded-full">
                  Community Educator
                </span>
              </div>
            )}

            {creator.username === '_biggids' && (
              <div className="mt-4">
                <span className="px-3 py-1 bg-crypto-green/20 text-crypto-green text-xs rounded-full">
                  Official Education Partner
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreatorsSection;
