
import React, { useEffect } from 'react';
import { Twitter, ExternalLink, Heart, MessageCircle, Repeat2 } from 'lucide-react';

const LatestUpdates = () => {
  useEffect(() => {
    // Create and append the Juicer script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.juicer.io/embed/sign/embed-code.js';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    // Cleanup function to remove the script when component unmounts
    return () => {
      const existingScript = document.querySelector('script[src="https://www.juicer.io/embed/sign/embed-code.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const tweets = [
    {
      id: '1',
      username: 'sign',
      displayName: 'Sign Protocol',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sign&backgroundColor=ff6b35',
      bio: 'Building the future of digital attestations and decentralized identity solutions.',
      content: 'Excited to announce our latest partnership with leading DeFi protocols! The future of decentralized finance is here. 🚀 #Sign #DeFi #Crypto',
      timestamp: '2h',
      likes: 234,
      retweets: 89,
      replies: 12,
      url: 'https://x.com/sign/status/1234567890'
    },
    {
      id: '2',
      username: 'sign',
      displayName: 'Sign Protocol',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sign&backgroundColor=ff6b35',
      bio: 'Building the future of digital attestations and decentralized identity solutions.',
      content: 'New creator tools launching next week! Our community of artists and developers will have even more ways to showcase their work. Stay tuned! 🎨 #SignCommunity',
      timestamp: '5h',
      likes: 187,
      retweets: 56,
      replies: 8,
      url: 'https://x.com/sign/status/1234567891'
    },
    {
      id: '3',
      username: 'cryptodev',
      displayName: 'CryptoDev',
      avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=cryptodev&backgroundColor=4f46e5',
      bio: 'Full-stack developer passionate about Web3, DeFi, and building the decentralized future.',
      content: 'Just integrated @sign protocol into our new dApp! The attestation system is incredibly smooth and developer-friendly. Highly recommend! 💪 #BuildOnSign',
      timestamp: '8h',
      likes: 156,
      retweets: 34,
      replies: 15,
      url: 'https://x.com/cryptodev/status/1234567892'
    },
    {
      id: '4',
      username: 'web3artist',
      displayName: 'Web3 Artist',
      avatar: 'https://api.dicebear.com/7.x/micah/svg?seed=artist&backgroundColor=ec4899',
      bio: 'Digital artist creating NFTs and exploring the intersection of art and blockchain technology.',
      content: 'The Sign community has been so supportive of creators! Just minted my latest piece with attestations. The authenticity layer adds so much value 🎨✨',
      timestamp: '12h',
      likes: 298,
      retweets: 78,
      replies: 23,
      url: 'https://x.com/web3artist/status/1234567893'
    },
    {
      id: '5',
      username: 'defi_trader',
      displayName: 'DeFi Trader',
      avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=trader&backgroundColor=10b981',
      bio: 'Professional DeFi trader and yield farmer. Sharing insights about the decentralized finance ecosystem.',
      content: 'Sign Protocol is revolutionizing how we think about trust and verification in DeFi. The attestation layer is a game-changer for institutional adoption! 📈',
      timestamp: '1d',
      likes: 421,
      retweets: 134,
      replies: 45,
      url: 'https://x.com/defi_trader/status/1234567894'
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold crypto-gradient bg-clip-text text-transparent">
        Latest Updates
      </h2>
      
      {/* Juicer Embed */}
      <div className="crypto-card">
        <h3 className="text-lg font-semibold mb-4 crypto-gradient bg-clip-text text-transparent">
          Live Social Feed
        </h3>
        <div id="juicer-embed" className="juicer-feed" data-feed-id="sign"></div>
      </div>

      {/* Twitter-style Cards */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold crypto-gradient bg-clip-text text-transparent">
          Community Highlights
        </h3>
        {tweets.map((tweet, index) => (
          <div 
            key={tweet.id} 
            className="crypto-card animate-fade-in cursor-pointer hover:scale-[1.01] transition-all duration-200"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => window.open(tweet.url, '_blank')}
          >
            {/* Header */}
            <div className="flex items-start gap-3 mb-3">
              <img
                src={tweet.avatar}
                alt={`${tweet.displayName} avatar`}
                className="w-12 h-12 rounded-full object-cover border-2 border-sign-orange/30"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-foreground truncate">{tweet.displayName}</span>
                  <span className="text-sm text-muted-foreground">@{tweet.username}</span>
                  <span className="text-sm text-muted-foreground">·</span>
                  <span className="text-sm text-muted-foreground">{tweet.timestamp}</span>
                  <ExternalLink size={14} className="text-sign-orange ml-auto flex-shrink-0" />
                </div>
                <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{tweet.bio}</p>
              </div>
            </div>

            {/* Content */}
            <p className="text-foreground mb-4 leading-relaxed">{tweet.content}</p>

            {/* Actions */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground pt-2 border-t border-border/50">
              <div className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                <MessageCircle size={16} />
                <span>{tweet.replies}</span>
              </div>
              <div className="flex items-center gap-1 hover:text-green-500 transition-colors">
                <Repeat2 size={16} />
                <span>{tweet.retweets}</span>
              </div>
              <div className="flex items-center gap-1 hover:text-red-500 transition-colors">
                <Heart size={16} />
                <span>{tweet.likes}</span>
              </div>
              <div className="ml-auto">
                <Twitter size={16} className="text-sign-accent" />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Crypto Widget */}
      <div className="crypto-card mt-8">
        <h3 className="text-lg font-semibold mb-4 crypto-gradient bg-clip-text text-transparent">
          Live Crypto Prices
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex justify-between items-center py-2">
            <span className="font-medium">BTC</span>
            <span className="text-crypto-green">$43,250</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="font-medium">ETH</span>
            <span className="text-crypto-green">$2,650</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="font-medium">SOL</span>
            <span className="text-crypto-green">$238</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="font-medium">SIGN</span>
            <span className="text-crypto-green">$0.045</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestUpdates;
