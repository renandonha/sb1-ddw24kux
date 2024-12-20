import React from 'react';

interface ProductQuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
}

export function ProductQuantitySelector({ quantity, onQuantityChange }: ProductQuantitySelectorProps) {
  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => quantity > 1 && onQuantityChange(quantity - 1)}
        className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-100"
      >
        -
      </button>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => onQuantityChange(Math.max(1, parseInt(e.target.value) || 1))}
        className="w-16 text-center border border-gray-300 rounded px-2 py-1"
      />
      <button
        onClick={() => onQuantityChange(quantity + 1)}
        className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-100"
      >
        +
      </button>
    </div>
  );
}