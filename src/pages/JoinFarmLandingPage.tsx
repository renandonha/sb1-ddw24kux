import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DollarSign, Users, Leaf, Clock, Sprout, Heart } from 'lucide-react';
import { Header } from '../components/Header';
import { AuthModal } from '../components/Auth/AuthModal';
import { useAuthStore } from '../store/authStore';

export function JoinFarmLandingPage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('signup');

  const handleJoinNow = () => {
    if (isAuthenticated) {
      navigate('/join-farm/opportunities');
    } else {
      setIsAuthModalOpen(true);
    }
  };

  const benefits = [
    {
      icon: DollarSign,
      title: 'Flexible Income',
      description: 'Earn extra money working flexible hours while learning about sustainable farming.'
    },
    {
      icon: Sprout,
      title: 'Learn Farming',
      description: 'Gain valuable experience in urban farming techniques and sustainable agriculture.'
    },
    {
      icon: Heart,
      title: 'Support Local',
      description: 'Help grow and distribute fresh, healthy food within your local community.'
    }
  ];

  const opportunities = [
    {
      title: 'Farm Assistant',
      type: 'Part-time',
      earnings: '$15-20/hour',
      description: 'Help with planting, harvesting, and maintaining urban farm spaces.'
    },
    {
      title: 'Market Coordinator',
      type: 'Weekend',
      earnings: '$18-25/hour',
      description: 'Manage farm stand sales and coordinate with local customers.'
    },
    {
      title: 'Growing Specialist',
      type: 'Full-time',
      earnings: '$40-50K/year',
      description: 'Lead growing operations and implement sustainable farming practices.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1592419044706-39796d40f98c"
            alt="Urban farming"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-900/70 mix-blend-multiply" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join the Urban Farming Movement
          </h1>
          <p className="text-xl text-green-50 mb-8 max-w-3xl mx-auto">
            Be part of the solution for sustainable local food production while earning extra income and learning valuable skills.
          </p>
          <button
            onClick={handleJoinNow}
            className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition-colors"
          >
            Join Now
          </button>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Join Urban Farms?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the benefits of joining our network of urban farms and making a positive impact in your community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white rounded-lg shadow-sm p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-4">
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Opportunities Section */}
      <div className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Available Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find the perfect role that matches your interests and availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {opportunities.map((opportunity) => (
              <div
                key={opportunity.title}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {opportunity.title}
                </h3>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    {opportunity.type}
                  </span>
                  <span className="text-gray-600 text-sm">
                    {opportunity.earnings}
                  </span>
                </div>
                <p className="text-gray-600">
                  {opportunity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community of urban farmers and start making a difference while earning extra income.
          </p>
          <button
            onClick={handleJoinNow}
            className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition-colors"
          >
            Start Your Journey
          </button>
        </div>
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onSwitchMode={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
      />
    </div>
  );
}