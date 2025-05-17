import React from 'react';
import { Check, X } from 'lucide-react';
import PricingCard from './PricingCard';

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      price: '0',
      description: 'Basic features with ads',
      features: [
        { text: 'Ad-supported music streaming', included: true },
        { text: 'Shuffle play only', included: true },
        { text: 'Basic audio quality', included: true },
        { text: 'Skip limit (6 per hour)', included: true },
        { text: 'Mobile app access', included: true },
        { text: 'Offline listening', included: false },
        { text: 'Ad-free experience', included: false },
        { text: 'HD audio quality', included: false }
      ],
      buttonText: 'Get Started',
      highlighted: false
    },
    {
      name: 'Premium',
      price: '9.99',
      description: 'Everything you need',
      features: [
        { text: 'Ad-supported music streaming', included: true },
        { text: 'On-demand playback', included: true },
        { text: 'High audio quality', included: true },
        { text: 'Unlimited skips', included: true },
        { text: 'Mobile app access', included: true },
        { text: 'Offline listening', included: true },
        { text: 'Ad-free experience', included: true },
        { text: 'HD audio quality', included: false }
      ],
      buttonText: 'Get Premium',
      highlighted: true
    },
    {
      name: 'Ultimate',
      price: '14.99',
      description: 'The complete experience',
      features: [
        { text: 'Ad-supported music streaming', included: true },
        { text: 'On-demand playback', included: true },
        { text: 'Ultra HD audio quality', included: true },
        { text: 'Unlimited skips', included: true },
        { text: 'Mobile app access', included: true },
        { text: 'Offline listening', included: true },
        { text: 'Ad-free experience', included: true },
        { text: 'HD audio quality', included: true }
      ],
      buttonText: 'Get Ultimate',
      highlighted: false
    }
  ];

  return (
    <section id="premium" className="py-24 bg-gradient-to-b from-blue-800 to-blue-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Choose Your Plan</h2>
          <p className="text-xl text-blue-100/80 max-w-3xl mx-auto">
            Unlock the full potential of SonicFlow with our flexible pricing options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              buttonText={plan.buttonText}
              highlighted={plan.highlighted}
            />
          ))}
        </div>

        <div className="text-center mt-12 text-blue-100/60 text-sm">
          All plans include a 30-day free trial. Cancel anytime.
        </div>
      </div>
    </section>
  );
};

export default Pricing;