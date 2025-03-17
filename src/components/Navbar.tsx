
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import WalletConnect from './WalletConnect';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="inline-block w-8 h-8 bg-agri-green rounded-full"></span>
          <span className="text-xl font-bold text-agri-green">AgriFix</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-agri-green font-medium">Home</Link>
          <Link to="/token" className="text-gray-700 hover:text-agri-green font-medium">Tokens</Link>
          <Link to="/swap" className="text-gray-700 hover:text-agri-green font-medium">Swap</Link>
          <WalletConnect />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <WalletConnect />
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="ml-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-agri-green font-medium py-2" onClick={toggleMenu}>Home</Link>
            <Link to="/token" className="text-gray-700 hover:text-agri-green font-medium py-2" onClick={toggleMenu}>Tokens</Link>
            <Link to="/swap" className="text-gray-700 hover:text-agri-green font-medium py-2" onClick={toggleMenu}>Swap</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
