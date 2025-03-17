
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const steps = [
  {
    number: "01",
    title: "Connect Your Wallet",
    description: "Link your cryptocurrency wallet to our platform to start trading agricultural tokens."
  },
  {
    number: "02",
    title: "Mint or Buy Tokens",
    description: "Mint new agricultural tokens or buy existing ones from other traders on the platform."
  },
  {
    number: "03",
    title: "Swap and Trade",
    description: "Easily exchange your agricultural tokens for stablecoins or other cryptocurrencies."
  },
  {
    number: "04",
    title: "Track Your Portfolio",
    description: "Monitor the performance of your agricultural token investments in real-time."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-agri-brown mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Getting started with agricultural tokenization is simple. Follow these steps to begin trading on our platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="border border-gray-200 overflow-hidden card-hover-effect">
              <div className="h-2 agri-gradient"></div>
              <CardHeader className="pb-2">
                <div className="text-5xl font-bold text-agri-green/20 mb-2">{step.number}</div>
                <CardTitle className="text-xl text-agri-brown">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
