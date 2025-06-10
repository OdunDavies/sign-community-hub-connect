
import React from 'react';
import { ExternalLink, Twitter } from 'lucide-react';

interface ProfileCardProps {
  username: string;
  displayName: string;
  bio: string;
  avatar: string;
  url: string;
  followers?: string;
  isAffiliate?: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  username,
  displayName,
  bio,
  avatar,
  url,
  followers,
  isAffiliate = false
}) => {
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`profile-card ${isAffiliate ? 'border-sign-orange/50' : ''}`} onClick={handleClick}>
      <div className="flex items-start gap-3">
        <img
          src={avatar}
          alt={`${displayName} avatar`}
          className="w-12 h-12 rounded-full object-cover border-2 border-sign-orange/30"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-bold text-foreground truncate">{displayName}</h3>
            <ExternalLink size={14} className="text-sign-orange flex-shrink-0" />
          </div>
          <p className="text-sm text-sign-orange mb-2">@{username}</p>
          {followers && (
            <p className="text-xs text-muted-foreground mb-2">{followers} followers</p>
          )}
          <p className="text-sm text-muted-foreground line-clamp-3">{bio}</p>
        </div>
      </div>
      <div className="mt-3 flex justify-end">
        <Twitter size={16} className="text-sign-accent" />
      </div>
    </div>
  );
};

export default ProfileCard;
