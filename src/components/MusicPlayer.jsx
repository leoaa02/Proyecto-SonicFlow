import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  

  useEffect(() => {
    let interval;
    
    if (isPlaying) {
      interval = window.setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 0.5;
        });
      }, 100);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);
  
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  
  return (
    <section className="py-20 bg-blue-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-blue-900/60 backdrop-blur-xl rounded-xl p-6 shadow-lg relative overflow-hidden">
          
          <div className="absolute inset-0 z-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-2 bg-blue-400/30 rounded-full transform -translate-x-1/2"
                style={{
                  height: `${20 + Math.random() * 60}%`,
                  left: `${(i + 1) * 20}%`,
                  bottom: 0,
                  animation: `musicBounce ${1 + Math.random() * 2}s ease-in-out infinite alternate`,
                  animationDelay: `${i * 0.2}s`
                }}
              ></div>
            ))}
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-white">Preview SonicFlow</h3>
                <p className="text-blue-300">Experience how it sounds</p>
              </div>
              <div className="flex items-center space-x-2">
                <Volume2 className="h-5 w-5 text-blue-300" />
                <div className="w-24 h-1 bg-blue-700 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-blue-400 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 mb-6">
              <button className="text-blue-300 hover:text-white transition-colors">
                <SkipBack size={24} />
              </button>
              <button 
                className="w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-400 flex items-center justify-center text-white transition-colors" 
                onClick={togglePlay}
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} fill="white" />}
              </button>
              <button className="text-blue-300 hover:text-white transition-colors">
                <SkipForward size={24} />
              </button>
              
              <div className="flex-grow">
                <div className="relative w-full h-1 bg-blue-700 rounded-full overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 to-blue-300 rounded-full transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-1 text-xs text-blue-400">
                  <span>0:{progress < 10 ? '0' : ''}{Math.floor(progress * 0.6)}</span>
                  <span>1:00</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 rounded bg-blue-700 flex-shrink-0 mr-4"></div>
              <div>
                <h4 className="text-white font-medium">Distant Horizons</h4>
                <p className="text-blue-300 text-sm">SonicFlow Originals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicPlayer;