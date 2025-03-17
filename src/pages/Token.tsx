
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TokenCard from '@/components/TokenCard';

// Mock token data
const tokens = [
  {
    name: "Maize Token",
    symbol: "MAIZE",
    icon: "🌽",
    description: "Tokenized representation of high-quality maize commodities, allowing for fractional ownership and easy trading.",
    price: 2.34
  },
  {
    name: "Soya Token",
    symbol: "SOYA",
    icon: "🫘",
    description: "Backed by premium soybean supplies, these tokens provide liquidity and investment opportunities in the soya market.",
    price: 3.12
  },
  {
    name: "Wheat Token",
    symbol: "WHEAT",
    icon: "🌾",
    description: "Represents ownership in wheat commodities, enabling efficient trading and investment in global wheat markets.",
    price: 2.67
  }
];

const Token = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-agri-brown mb-4">Agricultural Tokens</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Mint tokenized agricultural commodities and add them to your wallet. Each token represents ownership of the underlying agricultural product.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tokens.map((token, index) => (
              <TokenCard 
                key={index}
                name={token.name}
                symbol={token.symbol}
                icon={token.icon}
                description={token.description}
                price={token.price}
              />
            ))}
          </div>
          
          <div className="mt-16 bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-agri-brown mb-4">Why Mint Agricultural Tokens?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl mb-3">🔄</div>
                <h3 className="text-lg font-semibold text-agri-brown mb-2">Portfolio Diversification</h3>
                <p className="text-gray-600">Add agricultural commodities to your investment portfolio for greater diversification.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl mb-3">📈</div>
                <h3 className="text-lg font-semibold text-agri-brown mb-2">Market Exposure</h3>
                <p className="text-gray-600">Gain exposure to agricultural markets without the complexities of traditional commodity trading.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="text-lg font-semibold text-agri-brown mb-2">Liquidity Access</h3>
                <p className="text-gray-600">Convert your agricultural assets to liquid tokens that can be easily traded or used as collateral.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Token;
