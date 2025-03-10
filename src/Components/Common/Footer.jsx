import React from 'react';
import { Globe, Twitter, Facebook, Instagram, Youtube, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo and social links */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-green-400">Leap Lingo</h2>
            </div>
            
            <p className="text-gray-400">
              Learning languages made fun, effective, and accessible for everyone.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Links column 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Learn</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Popular Courses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Dictionary</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">For Schools</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">For Business</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Research</a></li>
            </ul>
          </div>
          
          {/* Links column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Help & Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Getting Started</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Report Abuse</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community Forum</a></li>
            </ul>
          </div>
          
          {/* Links column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">About Us</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Investors</a></li>
            </ul>
          </div>
        </div>
        
        {/* Language selector and app links */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8 mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Globe size={20} className="text-gray-400" />
            <select className="bg-gray-800 text-gray-400 rounded py-1 px-2 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500">
              <option>English</option>
              <option>Español</option>
              <option>Français</option>
              <option>Deutsch</option>
              <option>日本語</option>
              <option>中文</option>
            </select>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.1.5-3.19.5-1.09 0-2.23.45-3.2-.5-1.84-1.78-10.59-10.35-7.05-13.84 1.17-1.15 2.07-.57 3.19-.16.93.34 1.93.84 3.2.84 1.1 0 1.9-.27 2.64-.56 1.93-.77 3.28-1.34 4.96.56l.12.19c1.47 2.5-1.3 8.21-3.19 12.25l.12.19.4.53z" />
              </svg>
              <span>iOS</span>
            </a>
            <a href="#" className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M17.523 15.34c.44.52.688 1.2.688 1.927 0 1.49-.967 2.73-2.304 3.176l-.023-.216c0-1.66-1.434-3.447-2.526-4.63l-.048-.05c1.313-.3 2.545-1.273 3.263-2.4l.952 2.192zM6.64 18.32c-.407-1.034-.624-2.14-.624-3.244 0-1.056.2-2.07.56-3.015C6.86 11.248 6.933 10.42 6.933 9.6c0-1.227-.272-2.224-.84-2.93-.12-.155-.254-.293-.4-.417.1-.016.2-.033.3-.048 1.56-.244 3.103-.324 4.788-.102 1.55.205 2.854.695 3.9 1.476-1.12 1.193-1.76 2.673-1.76 4.142 0 1.13.424 2.224 1.2 3.156-1.12.703-1.976 1.467-2.553 2.298-.687-.87-1.587-1.81-2.536-2.644-.813-.714-1.356-1.08-1.87-1.08-.366 0-.717.193-1.044.546-.378.4-.5.867-.5 1.457 0 .963.272 1.967.832 2.98l.168.32c-.025.025-.05.05-.077.073z" />
              </svg>
              <span>Android</span>
            </a>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between border-t border-gray-800 pt-8 text-sm text-gray-500">
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 md:mb-0">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
          
          <div className="flex items-center">
            <span>© {currentYear} Leap Lingo. Made with </span>
            <Heart size={14} className="mx-1 text-red-500" />
            <span> for language learners.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;