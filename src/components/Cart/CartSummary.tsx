import React from 'react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../utils/formatPrice';
import { useNavigate } from 'react-router-dom';

interface CartSummaryProps {
  onClose: () => void;
}

export function CartSummary({ onClose }: CartSummaryProps) {
  const { state } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  return (
    <div className="border-t border-gray-200 px-4 py-6">
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Subtotal</span>
          <span>{formatPrice(state.total.toString())}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Delivery Fee</span>
          <span>{formatPrice('5.00')}</span>
        </div>
        <div className="flex justify-between font-semibold text-gray-900 pt-2 border-t">
          <span>Total</span>
          <span>{formatPrice((state.total + 5).toString())}</span>
        </div>
      </div>
      <button
        onClick={handleCheckout}
        className="w-full mt-6 bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}