import { Smartphone, Laptop, Tablet } from 'lucide-react';

const Download = () => {
  return (
    <section id="download" className="py-24 bg-blue-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Listen Anywhere</h2>
            <p className="text-xl text-blue-100/80 max-w-3xl mx-auto">
              Download SonicFlow on all your devices and take your music everywhere.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-800/60 backdrop-blur-sm p-8 rounded-xl text-center transition-all duration-300 hover:bg-blue-700/60 hover:scale-105">
              <div className="flex justify-center mb-6">
                <Smartphone className="h-16 w-16 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Mobile</h3>
              <p className="text-blue-100/80 mb-6">
                Listen on the go with our iOS and Android apps. Perfect for commutes and travel.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button className="px-4 py-2 bg-blue-950/60 rounded-lg text-blue-200 text-sm hover:bg-blue-900/60 transition-colors">
                  Download for iOS
                </button>
                <button className="px-4 py-2 bg-blue-950/60 rounded-lg text-blue-200 text-sm hover:bg-blue-900/60 transition-colors">
                  Download for Android
                </button>
              </div>
            </div>
            
            <div className="bg-blue-800/60 backdrop-blur-sm p-8 rounded-xl text-center transition-all duration-300 hover:bg-blue-700/60 hover:scale-105">
              <div className="flex justify-center mb-6">
                <Laptop className="h-16 w-16 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Desktop</h3>
              <p className="text-blue-100/80 mb-6">
                Enjoy the full experience on your computer with our desktop application.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button className="px-4 py-2 bg-blue-950/60 rounded-lg text-blue-200 text-sm hover:bg-blue-900/60 transition-colors">
                  Download for Mac
                </button>
                <button className="px-4 py-2 bg-blue-950/60 rounded-lg text-blue-200 text-sm hover:bg-blue-900/60 transition-colors">
                  Download for Windows
                </button>
              </div>
            </div>
            
            <div className="bg-blue-800/60 backdrop-blur-sm p-8 rounded-xl text-center transition-all duration-300 hover:bg-blue-700/60 hover:scale-105">
              <div className="flex justify-center mb-6">
                <Tablet className="h-16 w-16 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Web Player</h3>
              <p className="text-blue-100/80 mb-6">
                No download required. Access your music directly from any browser.
              </p>
              <button className="px-6 py-2 bg-blue-500 hover:bg-blue-400 rounded-lg text-white text-sm transition-colors">
                Open Web Player
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;