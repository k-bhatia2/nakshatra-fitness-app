
import React from 'react';
import { SponsoredCardData } from '../../types';

interface SponsoredCardProps {
  data: SponsoredCardData;
}

const SponsoredCard: React.FC<SponsoredCardProps> = ({ data }) => {
  const { label, image, cta, href, provider } = data;
  
  // Mock tracking function
  const trackClick = () => {
    console.log(`Tracking click for ${data.trackingId}`);
  };

  return (
    <div className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 ease-out">
        <img src={image} alt={label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"/>
        <div className="absolute bottom-0 left-0 p-4 w-full">
            <p className="text-xs uppercase font-semibold text-white/80">{provider}</p>
            <h3 className="text-lg font-bold text-white mt-1">{label}</h3>
            <a 
                href={href}
                onClick={trackClick}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-2 bg-primary text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors"
            >
                {cta}
            </a>
        </div>
    </div>
  );
};

export default SponsoredCard;
