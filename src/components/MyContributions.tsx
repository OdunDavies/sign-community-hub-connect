import React from 'react';
import { ExternalLink, Award, Users, Zap } from 'lucide-react';
import ClickableImage from './ClickableImage';

const MyContributions = () => {
  const contributions = [
    {
      icon: <Users className="w-6 h-6 text-crypto-blue" />,
      title: "Community Building",
      description: "Built and nurtured the Sign community, fostering collaboration and growth among members worldwide."
    },
    {
      icon: <Award className="w-6 h-6 text-crypto-green" />,
      title: "Content Creation",
      description: "Created educational content and resources to help newcomers understand and navigate the Sign ecosystem."
    },
    {
      icon: <Zap className="w-6 h-6 text-crypto-purple" />,
      title: "Innovation & Development",
      description: "Contributed to platform development and introduced innovative features that enhance user experience."
    }
  ];

  const myArtworks = [
    '/lovable-uploads/632106d3-88da-4767-8bcb-3cd1f96417c9.png',
    '/lovable-uploads/f71569a6-7b28-42df-a640-1d080713aed6.png',
    '/lovable-uploads/5fbf2bd6-f845-4508-825d-2cd8630ddc82.png',
    '/lovable-uploads/478af62f-e60a-46b7-86ea-4c6760b8d1a9.png'
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold crypto-gradient bg-clip-text text-transparent text-center">
        My Contributions
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Profile Section */}
        <div className="crypto-card">
          <div 
            className="flex items-start gap-4 mb-6 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => window.open('https://x.com/emlord_01', '_blank')}
          >
            <ClickableImage
              src="https://pbs.twimg.com/profile_images/1820434778995638272/QJQJQJQJ_400x400.jpg"
              alt="EmLord"
              className="w-20 h-20 rounded-full object-cover border-3 border-crypto-purple glow-effect"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-bold text-xl">EmLord</h3>
                <ExternalLink size={18} className="text-crypto-purple" />
              </div>
              <p className="text-crypto-purple mb-3">@emlord_01</p>
              <p className="text-muted-foreground">
                Passionate community builder and creator contributing to the Sign ecosystem. 
                Dedicated to fostering innovation and collaboration in the crypto space.
              </p>
            </div>
          </div>

          {/* Contributions List */}
          <div className="space-y-4">
            <h4 className="font-semibold text-crypto-purple text-lg">Key Contributions:</h4>
            {contributions.map((contribution, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                {contribution.icon}
                <div>
                  <h5 className="font-semibold mb-1">{contribution.title}</h5>
                  <p className="text-sm text-muted-foreground">{contribution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Artworks/Projects Section */}
        <div className="space-y-6">
          <h4 className="font-semibold text-crypto-purple text-lg">Featured Works</h4>
          <div className="grid grid-cols-2 gap-4">
            {myArtworks.map((artwork, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <ClickableImage
                  src={artwork}
                  alt={`My contribution ${index + 1}`}
                  className="w-full h-40 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-3 left-3 text-white text-sm font-medium">
                    Project {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="text-center p-4 rounded-lg bg-crypto-purple/10 border border-crypto-purple/20">
              <div className="text-2xl font-bold crypto-gradient bg-clip-text text-transparent">50+</div>
              <div className="text-sm text-muted-foreground">Community Events</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-crypto-blue/10 border border-crypto-blue/20">
              <div className="text-2xl font-bold crypto-gradient bg-clip-text text-transparent">1K+</div>
              <div className="text-sm text-muted-foreground">Members Helped</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyContributions;
