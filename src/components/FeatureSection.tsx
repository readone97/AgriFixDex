
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FeatureSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Agricultural fields" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-agri-brown mb-6">Revolutionizing Agricultural Finance</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-agri-green/20 p-2 rounded-full text-agri-green mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">From Farm to Token</h3>
                  <p className="text-gray-600">Real agricultural commodities are verified, audited, and represented as digital tokens on the blockchain.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-agri-green/20 p-2 rounded-full text-agri-green mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Trade 24/7</h3>
                  <p className="text-gray-600">Unlike traditional markets, our decentralized exchange operates around the clock, allowing you to trade when it suits you.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-agri-green/20 p-2 rounded-full text-agri-green mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Regulatory Compliance</h3>
                  <p className="text-gray-600">Our platform adheres to relevant regulations while leveraging blockchain innovation to improve agricultural markets.</p>
                </div>
              </div>
            </div>
            
            <Button asChild className="bg-agri-green hover:bg-agri-green/90 text-white px-6 py-5 btn-hover-effect">
              <Link to="/swap">
                Start Trading Now <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
