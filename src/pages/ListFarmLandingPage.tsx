import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sprout, Leaf, Users, DollarSign } from 'lucide-react';
import { Header } from '../components/Header';
import { AuthModal } from '../components/Auth/AuthModal';
import { useAuthStore } from '../store/authStore';

export function ListFarmLandingPage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('signup');

  const handleGetStarted = () => {
    if (isAuthenticated) {
      navigate('/list-your-farm/onboarding');
    } else {
      setIsAuthModalOpen(true);
    }
  };

  const benefits = [
    {
      icon: DollarSign,
      title: 'Earn Extra Income',
      description: 'Turn your urban farm into a profitable business by connecting with local customers seeking fresh, sustainable produce.'
    },
    {
      icon: Leaf,
      title: 'Environmental Impact',
      description: 'Reduce food miles and carbon footprint by growing and selling locally, contributing to a more sustainable food system.'
    },
    {
      icon: Users,
      title: 'Build Community',
      description: 'Connect with like-minded individuals and create a positive impact in your local community through sustainable farming.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad"
            alt="Urban farming"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-900/70 mix-blend-multiply" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transform Your Urban Farm into a Sustainable Business
          </h1>
          <p className="text-xl text-green-50 mb-8 max-w-3xl mx-auto">
            Join our community of urban farmers making a difference. Share your produce, connect with local customers, and contribute to a more sustainable future.
          </p>
          <button
            onClick={handleGetStarted}
            className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition-colors"
          >
            List My Farm
          </button>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why List Your Urban Farm?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our platform and become part of a growing movement towards sustainable, local food production.
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

      {/* Impact Stats */}
      <div className="bg-green-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-green-100">Active Urban Farms</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-green-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">30%</div>
              <div className="text-green-100">Average Income Increase</div>
            </div>
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
            Join our community of urban farmers and start making a difference in your local food system today.
          </p>
          <button
            onClick={handleGetStarted}
            className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition-colors"
          >
            List My Farm Now
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