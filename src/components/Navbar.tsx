import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const tabs = ['Home', 'About', 'Education', 'Projects', 'Certifications', 'Contact'];

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <div 
          className="text-2xl font-bold tracking-tighter text-primary font-headline cursor-pointer"
          onClick={() => setActiveTab('Home')}
        >
          LogicalArchitect
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 font-headline uppercase tracking-wider text-sm">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`transition-colors duration-300 pb-1 border-b-2 ${
                activeTab === tab 
                  ? 'text-primary border-primary' 
                  : 'text-on-surface-variant border-transparent hover:text-on-surface'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button className="hidden sm:block bg-primary hover:bg-primary-dim text-on-primary-fixed px-6 py-2 rounded-full font-label font-bold transition-all duration-300 active:scale-95">
            Resume
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-on-surface"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-surface-container border-b border-outline-variant/10 px-6 py-8 space-y-6 flex flex-col items-center"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setIsOpen(false);
              }}
              className={`font-headline uppercase tracking-wider text-lg ${
                activeTab === tab ? 'text-primary' : 'text-on-surface-variant'
              }`}
            >
              {tab}
            </button>
          ))}
          <button className="w-full bg-primary text-on-primary-fixed py-3 rounded-full font-label font-bold">
            Resume
          </button>
        </motion.div>
      )}
    </nav>
  );
}
