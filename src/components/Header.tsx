import React, { useState } from 'react';
import { Sprout, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CartDrawer } from './Cart/CartDrawer';
import { ProfileButton } from './Auth/ProfileButton';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const { state } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
            <Sprout className="w-8 h-8 text-green-600" />
            <span className="text-xl font-bold text-gray-900">Habitus</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">Browse Farms</a>
            <button 
              onClick={() => navigate('/join-farm')}
              className="text-gray-600 hover:text-gray-900"
            >
              Join a Farm
            </button>
            <button 
              onClick={() => navigate('/list-your-farm')}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              List Your Farm
            </button>
            <ProfileButton />
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-gray-100 rounded-full"
            >
              <ShoppingCart className="w-6 h-6 text-gray-600" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          </nav>
        </div>
      </div>
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}