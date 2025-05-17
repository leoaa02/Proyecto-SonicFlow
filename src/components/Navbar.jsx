import React, { useState, useEffect } from 'react';
import { Headphones, Menu, X } from 'lucide-react';
import { Link } from './ui/Link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-blue-900/95 backdrop-blur-md py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Headphones className="h-8 w-8 text-blue-400" />
            <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
              SonicFlow
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features">Features</Link>
            <Link href="#premium">Premium</Link>
            <Link href="#download">Download</Link>
            <Link href="#support">Support</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors">
              Sign Up
            </button>
            <button className="px-6 py-2 text-sm font-medium bg-blue-500 hover:bg-blue-400 text-white rounded-full transition-colors">
              Log In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white/90 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-900/95 backdrop-blur-md shadow-lg">
          <div className="px-4 py-5 space-y-4">
            <Link href="#features" onClick={() => setMobileMenuOpen(false)}>
              Features
            </Link>
            <Link href="#premium" onClick={() => setMobileMenuOpen(false)}>
              Premium
            </Link>
            <Link href="#download" onClick={() => setMobileMenuOpen(false)}>
              Download
            </Link>
            <Link href="#support" onClick={() => setMobileMenuOpen(false)}>
              Support
            </Link>
            <div className="pt-4 flex flex-col space-y-3">
              <button className="w-full py-2.5 text-center text-sm font-medium text-white/80 hover:text-white transition-colors">
                Sign Up
              </button>
              <button className="w-full py-2.5 text-center text-sm font-medium bg-blue-500 hover:bg-blue-400 text-white rounded-full transition-colors">
                Log In
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;