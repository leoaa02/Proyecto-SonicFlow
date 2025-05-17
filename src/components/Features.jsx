import React from 'react';
import { Headphones, Download, Music, Radio, Heart, Mic } from 'lucide-react';
import FeatureCard from './FeatureCard';

const Features = () => {
  const features = [
    {
      icon: <Music className="h-8 w-8 text-blue-400" />,
      title: 'Millions of Songs',
      description: 'Access our vast library of tracks from artists around the world.'
    },
    {
      icon: <Download className="h-8 w-8 text-blue-400" />,
      title: 'Offline Listening',
      description: 'Download music and listen anywhere, even without internet.'
    },
    {
      icon: <Radio className="h-8 w-8 text-blue-400" />,
      title: 'Personalized Radio',
      description: 'Stations that adapt to your taste and discover new favorites.'
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-400" />,
      title: 'Curated Playlists',
      description: 'Expert-crafted playlists for every mood, activity, and genre.'
    },
    {
      icon: <Headphones className="h-8 w-8 text-blue-400" />,
      title: 'High Quality Audio',
      description: 'Crystal clear sound quality for the ultimate listening experience.'
    },
    {
      icon: <Mic className="h-8 w-8 text-blue-400" />,
      title: 'Original Podcasts',
      description: 'Exclusive shows and episodes you won\'t find anywhere else.'
    }
  ];

  return (
    <section id="features" className="py-24 bg-blue-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose SonicFlow</h2>
          <p className="text-xl text-blue-100/80 max-w-3xl mx-auto">
            Discover all the ways SonicFlow enhances your music experience with innovative features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;