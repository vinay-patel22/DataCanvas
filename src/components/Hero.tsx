import React from 'react';
import { LineChart, PieChart, BarChart } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Transform Your Data into
          <span className="text-indigo-600"> Visual Stories</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Harness the power of AI to automatically create stunning, interactive visualizations
          that bring your data to life. No coding required.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition">
            Start Free Trial
          </button>
          <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-50 transition">
            Watch Demo
          </button>
        </div>
        
        <div className="mt-16 flex justify-center space-x-8 text-gray-400">
          <LineChart className="w-16 h-16 animate-pulse" />
          <PieChart className="w-16 h-16 animate-pulse delay-100" />
          <BarChart className="w-16 h-16 animate-pulse delay-200" />
        </div>
      </div>
    </div>
  );
}