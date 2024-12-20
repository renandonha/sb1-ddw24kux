import React from 'react';

interface ProductSizeSelectorProps {
  sizes: string[];
  selectedSize: string;
  onSizeChange: (size: string) => void;
}

export function ProductSizeSelector({ sizes, selectedSize, onSizeChange }: ProductSizeSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => onSizeChange(size)}
          className={`px-4 py-2 rounded-lg border ${
            selectedSize === size
              ? 'border-green-600 bg-green-50 text-green-600'
              : 'border-gray-300 hover:border-gray-400'
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  );
}