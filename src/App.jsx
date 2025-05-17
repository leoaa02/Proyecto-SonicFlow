import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import MusicPlayer from './components/MusicPlayer';
import Pricing from './components/Pricing';
import Download from './components/Download';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <Features />
      <MusicPlayer />
      <Pricing />
      <Download />
    </div>
  );
}

export default App;
