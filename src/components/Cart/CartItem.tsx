import React from 'react';
import { Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { CartItem as CartItemType } from '../../types';
import { formatPrice } from '../../utils/formatPrice';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { removeItem, updateQuantity } = useCart();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="flex items-start space-x-4">
      <img
        src={item.imageUrl}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-lg"
      />
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{item.name}</h3>
        {item.size && (
          <p className="text-sm text-gray-500">Size: {item.size}</p>
        )}
        <p className="text-sm font-medium text-gray-900">
          {formatPrice(item.price)}
        </p>
        <div className="flex items-center space-x-2 mt-2">
          <button
            onClick={() => handleQuantityChange(item.quantity - 1)}
            className="w-6 h-6 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-100"
          >
            -
          </button>
          <span className="w-8 text-center">{item.quantity}</span>
          <button
            onClick={() => handleQuantityChange(item.quantity + 1)}
            className="w-6 h-6 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-100"
          >
            +
          </button>
          <button
            onClick={() => removeItem(item.id)}
            className="ml-4 p-1 text-gray-400 hover:text-red-500"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}