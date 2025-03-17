
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <span className="inline-block w-8 h-8 bg-agri-green rounded-full"></span>
              <span className="text-xl font-bold text-agri-green">AgriFix</span>
            </Link>
            <p className="text-gray-600 mb-4">
              Revolutionizing agriculture through tokenization and blockchain technology.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-agri-brown">Platform</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-agri-green">Home</Link></li>
              <li><Link to="/token" className="text-gray-600 hover:text-agri-green">Tokens</Link></li>
              <li><Link to="/swap" className="text-gray-600 hover:text-agri-green">Swap</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-agri-brown">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-agri-green">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-agri-green">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-agri-green">Whitepaper</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-agri-brown">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-agri-green">Twitter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-agri-green">Discord</a></li>
              <li><a href="#" className="text-gray-600 hover:text-agri-green">Telegram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} AgriFix. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-agri-green text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-agri-green text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
