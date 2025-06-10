
import React, { useEffect } from 'react';
import { Twitter, ExternalLink } from 'lucide-react';

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
      content: 'Excited to announce our latest partnership with leading DeFi protocols! The future of decentralized finance is here. 🚀 #Sign #DeFi #Crypto',
      timestamp: '2 hours ago',
      likes: 234,
      retweets: 89,
      url: 'https://x.com/sign/status/1234567890'
    },
    {
      id: '2',
      content: 'New creator tools launching next week! Our community of artists and developers will have even more ways to showcase their work. Stay tuned! 🎨 #SignCommunity',
      timestamp: '5 hours ago',
      likes: 187,
      retweets: 56,
      url: 'https://x.com/sign/status/1234567891'
    },
    {
      id: '3',
      content: 'Thank you to all our amazing affiliates and community members for making Sign the thriving ecosystem it is today. Together we build! 💪 #SignFamily',
      timestamp: '1 day ago',
      likes: 421,
      retweets: 134,
      url: 'https://x.com/sign/status/1234567892'
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

      <div className="space-y-4">
        {tweets.map((tweet, index) => (
          <div 
            key={tweet.id} 
            className="crypto-card animate-fade-in cursor-pointer hover:scale-[1.02]"
            style={{ animationDelay: `${index * 0.2}s` }}
            onClick={() => window.open(tweet.url, '_blank')}
          >
            <div className="flex items-start gap-3">
              <img
                src="https://pbs.twimg.com/profile_images/1856754080883044352/H89jYfqg_400x400.jpg"
                alt="@sign"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold">@sign</span>
                  <span className="text-sm text-muted-foreground">{tweet.timestamp}</span>
                  <ExternalLink size={14} className="text-crypto-purple ml-auto" />
                </div>
                <p className="text-foreground mb-3">{tweet.content}</p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Twitter size={16} />
                    {tweet.retweets}
                  </span>
                  <span className="flex items-center gap-1">
                    ❤️ {tweet.likes}
                  </span>
                </div>
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
