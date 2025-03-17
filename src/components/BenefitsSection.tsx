
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const benefits = [
  {
    icon: "🔄",
    title: "Liquidity",
    description: "Convert agricultural assets into tradable tokens easily, unlocking capital and enabling seamless transactions."
  },
  {
    icon: "🔒",
    title: "Security",
    description: "Blockchain technology ensures immutable records, transparent transactions, and secure ownership verification."
  },
  {
    icon: "🌐",
    title: "Global Access",
    description: "Connect with investors and markets worldwide, expanding opportunities beyond traditional agricultural boundaries."
  },
  {
    icon: "⚡",
    title: "Efficiency",
    description: "Reduce intermediaries, lower transaction costs, and speed up settlement times compared to traditional markets."
  },
  {
    icon: "📊",
    title: "Market Data",
    description: "Access real-time pricing, trading volume, and market trends to make informed decisions."
  },
  {
    icon: "🤝",
    title: "Fractional Ownership",
    description: "Divide large agricultural assets into smaller tokens, enabling broader participation and investment."
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-agri-brown mb-4">Benefits of Tokenization</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Agricultural tokenization transforms how we trade and invest in farm products, creating new opportunities for farmers, traders, and investors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-t-4 border-agri-green card-hover-effect">
              <CardHeader className="pb-2">
                <div className="text-4xl mb-2">{benefit.icon}</div>
                <CardTitle className="text-xl text-agri-brown">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
