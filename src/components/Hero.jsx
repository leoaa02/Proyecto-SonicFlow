import React from 'react';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      
      <div className="absolute inset-0 bg-blue-950 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-700/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-blue-400/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Music Without <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">Limits</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100/80 mb-10 max-w-2xl mx-auto">
            Millions of songs, podcasts, and playlists. No credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
            <button className="px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white rounded-full font-medium text-lg transition-all transform hover:scale-105 w-full sm:w-auto">
              Get SonicFlow Free
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm rounded-full font-medium text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto">
              <Play size={18} fill="white" />
              See how it works
            </button>
          </div>
          
          <p className="text-sm text-blue-100/60">
            * Terms and conditions apply. Free plan has limitations.
          </p>
        </div>
      </div>

      
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 flex justify-center overflow-hidden z-0 opacity-70">
        <div className="flex gap-6">
          {[1, 2, 3, 4, 5].map((index) => (
            <div 
              key={index}
              className="w-40 h-40 md:w-48 md:h-48 bg-blue-900/60 backdrop-blur-md rounded-lg shadow-lg flex flex-col justify-end p-4 transform translate-y-1/2 hover:translate-y-1/3 transition-transform duration-700"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-blue-200 rounded-full mb-4"></div>
              <div className="h-2 w-3/4 bg-white/20 rounded-full mb-2"></div>
              <div className="h-2 w-1/2 bg-white/20 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;