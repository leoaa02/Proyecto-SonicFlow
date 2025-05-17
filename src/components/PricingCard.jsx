import React from 'react';
import { Check, X } from 'lucide-react';

const PricingCard = ({
  name,
  price,
  description,
  features,
  buttonText,
  highlighted
}) => {
  return (
    <div
      className={`rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 ${
        highlighted
          ? 'bg-gradient-to-b from-blue-500 to-blue-600 shadow-xl shadow-blue-500/20 scale-105'
          : 'bg-blue-800/50 backdrop-blur-sm'
      }`}
    >
      <div
        className={`p-8 border-b ${
          highlighted ? 'border-blue-400/30' : 'border-blue-700/30'
        }`}
      >
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <div className="mb-3">
          <span className="text-4xl font-bold text-white">${price}</span>
          <span className="text-blue-100/70 ml-1">/month</span>
        </div>
        <p className={`${highlighted ? 'text-blue-100' : 'text-blue-100/80'}`}>
          {description}
        </p>
      </div>

      <div className="p-8">
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start text-sm"
            >
              {feature.included ? (
                <Check className="h-5 w-5 text-blue-300 mr-3 mt-0.5 flex-shrink-0" />
              ) : (
                <X className="h-5 w-5 text-blue-500/50 mr-3 mt-0.5 flex-shrink-0" />
              )}
              <span
                className={
                  feature.included
                    ? 'text-blue-100'
                    : 'text-blue-300/50 line-through'
                }
              >
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        <button
          className={`w-full py-3 rounded-full font-medium transition-colors ${
            highlighted
              ? 'bg-white text-blue-600 hover:bg-blue-50'
              : 'bg-blue-600 text-white hover:bg-blue-500'
          }`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;