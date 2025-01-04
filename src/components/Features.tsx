import React from 'react';
import { Sparkles, Brain, Palette, Lock, Share2, LineChart } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: 'AI-Powered Suggestions',
    description: 'Get intelligent recommendations for the best visualization types based on your data patterns.'
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: 'Automated Insights',
    description: 'Automatically discover and highlight key trends, patterns, and anomalies in your data.'
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: 'Custom Themes',
    description: 'Create and save custom visualization themes that match your brand identity.'
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and compliance with major data protection regulations.'
  },
  {
    icon: <Share2 className="h-6 w-6" />,
    title: 'Collaboration Tools',
    description: 'Share and collaborate on visualizations with team members in real-time.'
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: 'Interactive Dashboards',
    description: 'Create dynamic dashboards with drag-and-drop interface and real-time updates.'
  }
];

export function Features() {
  return (
    <div id="features" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Powerful Features for Data Visualization
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to transform complex data into clear, actionable insights
          </p>
        </div>
        
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}