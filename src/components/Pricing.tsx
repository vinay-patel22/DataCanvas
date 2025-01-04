import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '49',
    features: [
      'Up to 5 team members',
      '50 visualizations per month',
      'Basic templates',
      'Email support',
      'Basic analytics'
    ]
  },
  {
    name: 'Professional',
    price: '99',
    popular: true,
    features: [
      'Up to 20 team members',
      'Unlimited visualizations',
      'Advanced templates',
      'Priority support',
      'Advanced analytics',
      'Custom themes',
      'API access'
    ]
  },
  {
    name: 'Enterprise',
    price: '299',
    features: [
      'Unlimited team members',
      'Unlimited everything',
      'Custom templates',
      '24/7 phone support',
      'Advanced security',
      'Custom integration',
      'Dedicated success manager'
    ]
  }
];

export function Pricing() {
  return (
    <div id="pricing" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the perfect plan for your team's needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-sm ${
                plan.popular ? 'border-2 border-indigo-600' : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
                  <span className="inline-flex rounded-full bg-indigo-600 px-4 py-1 text-sm font-semibold text-white">
                    Popular
                  </span>
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="ml-1 text-xl font-semibold text-gray-500">/month</span>
                </p>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-indigo-600" />
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`mt-8 w-full rounded-lg px-4 py-2 text-center text-sm font-semibold ${
                  plan.popular
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'border border-indigo-600 text-indigo-600 hover:bg-indigo-50'
                } transition`}>
                  Get started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}