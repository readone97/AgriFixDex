
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-agri-brown">
              Agricultural <span className="text-agri-green">Tokenization</span> Exchange
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Trade tokenized agricultural commodities securely and efficiently on our decentralized exchange. Connect with global markets, reduce costs, and unlock liquidity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-agri-green hover:bg-agri-green/90 text-white px-8 py-6 text-lg btn-hover-effect">
                <Link to="/token">Start Trading</Link>
              </Button>
              <Button asChild variant="outline" className="border-agri-green text-agri-green hover:bg-agri-green/10 px-8 py-6 text-lg btn-hover-effect">
                <a href="#benefits">
                  Learn More <ArrowRight size={16} className="ml-2" />
                </a>
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 bg-agri-green/20 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
              <div className="w-60 h-60 md:w-80 md:h-80 bg-agri-yellow/30 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
              <div className="relative flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl shadow-lg transform -rotate-6 z-10">
                    <div className="text-4xl">🌽</div>
                    <div className="font-semibold mt-2">MAIZE</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-lg transform rotate-6 mt-8 z-20">
                    <div className="text-4xl">🫘</div>
                    <div className="font-semibold mt-2">SOYA</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-lg transform rotate-3 z-30">
                    <div className="text-4xl">🌾</div>
                    <div className="font-semibold mt-2">WHEAT</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-lg transform -rotate-3 mt-6 z-40">
                    <div className="text-4xl">💵</div>
                    <div className="font-semibold mt-2">USDC</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-100 to-transparent"></div>
    </div>
  );
};

export default HeroSection;
