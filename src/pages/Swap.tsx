
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SwapCard from '@/components/SwapCard';
import TokenBalance from '@/components/TokenBalance';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useWallet } from '@solana/wallet-adapter-react';

const Swap = () => {
  const { connected } = useWallet();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-agri-brown mb-4">Swap Agricultural Tokens</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Easily exchange your agricultural tokens for stablecoins or other cryptocurrencies. Connect your wallet to get started.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-2/3">
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <div className="flex justify-center mb-8">
                  <SwapCard />
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3 space-y-6">
              {connected && <TokenBalance className="mb-6" />}
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-agri-brown">Recent Swaps</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <div>
                        <div className="font-medium">2.5 MAIZE → 5.85 USDC</div>
                        <div className="text-sm text-gray-500">2 mins ago</div>
                      </div>
                      <div className="text-green-600 text-sm font-medium">Completed</div>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <div>
                        <div className="font-medium">1.8 WHEAT → 4.81 USDT</div>
                        <div className="text-sm text-gray-500">15 mins ago</div>
                      </div>
                      <div className="text-green-600 text-sm font-medium">Completed</div>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <div>
                        <div className="font-medium">3.2 SOYA → 9.98 DAI</div>
                        <div className="text-sm text-gray-500">37 mins ago</div>
                      </div>
                      <div className="text-green-600 text-sm font-medium">Completed</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-agri-brown">Market Prices</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="text-xl mr-2">🌽</span>
                        <span>MAIZE</span>
                      </div>
                      <div>
                        <div className="font-medium">$2.34</div>
                        <div className="text-xs text-green-600">+3.2%</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="text-xl mr-2">🫘</span>
                        <span>SOYA</span>
                      </div>
                      <div>
                        <div className="font-medium">$3.12</div>
                        <div className="text-xs text-green-600">+1.8%</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="text-xl mr-2">🌾</span>
                        <span>WHEAT</span>
                      </div>
                      <div>
                        <div className="font-medium">$2.67</div>
                        <div className="text-xs text-red-600">-0.5%</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Swap;
