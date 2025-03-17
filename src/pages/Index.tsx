
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import FeatureSection from '@/components/FeatureSection';
import HowItWorksSection from '@/components/HowItWorksSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <BenefitsSection />
        <FeatureSection />
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
