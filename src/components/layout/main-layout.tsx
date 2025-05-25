import type { ReactNode } from 'react';
import Link from 'next/link';
import { Navbar } from './navbar';
import { Toaster } from "@/components/ui/toaster";
import { APP_NAME } from '@/lib/constants';
import { AnimatedPageBackground } from '@/components/decorations/animated-page-background';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col relative">
      <AnimatedPageBackground />
      <div className="relative z-10 flex flex-col flex-1"> {/* Ensure content is above background */}
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Toaster />
        <footer className="bg-gray-950 text-gray-300 backdrop-blur-lg relative overflow-hidden">
          <div className="footer-diagonal-bg-lines"></div> {/* Decoration layer */}
          
          {/* Horizontal lines container - moved to be full width at the top */}
          <div className="mb-8 relative z-10"> {/* mb-8 creates space before the content container. z-10 to be on same plane as content, above diagonal bg. */}
            <div className="footer-top-horizontal-line-upper"></div>
            <div className="footer-top-horizontal-line-lower"></div>
          </div>
          
          <div className="container mx-auto pb-8 relative z-10"> {/* Main content layer, removed pt-12 */}
            <div className="grid md:grid-cols-2 gap-10 items-start mb-10">
              <div>
                <p className="font-signika-negative text-4xl bg-rainbow-text-gradient text-transparent bg-clip-text mb-0">Jaro Education</p>
                <p className="font-signika-negative text-lg text-gray-300 mt-0">EXPLORE NEW SKILLS</p>
                <div className="mt-2 flex items-center space-x-2 justify-start">
                  {/* Links previously here are now in hamburger menu */}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Jaro Education is your gateway to a world of knowledge. Discover a wide range of courses, learn from industry experts, and unlock your potential. Join our community and start your learning journey today!
                </p>
              </div>
            </div>

            <div className="border-t border-gray-700 my-4"></div>
            
            <div className="flex flex-col items-center justify-center gap-3 text-center md:h-auto md:py-4">
              <p className="font-signika-negative font-normal">
                Built with <span className="inline-block animate-pulse-heart">❤️</span> by Swapnadeep © {new Date().getFullYear()} {APP_NAME}
              </p>
              <p className="text-xs font-normal">
                <span className="font-sans">🇮🇳</span> Proudly Made in India. Jai Hind!
              </p>
              <div className="flex justify-center space-x-4 mt-3">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors group">
                  <Instagram size={24} className="transition-transform duration-300 group-hover:scale-110" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors group">
                  <Facebook size={24} className="transition-transform duration-300 group-hover:scale-110" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors group">
                  <Twitter size={24} className="transition-transform duration-300 group-hover:scale-110" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors group">
                  <Linkedin size={24} className="transition-transform duration-300 group-hover:scale-110" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
