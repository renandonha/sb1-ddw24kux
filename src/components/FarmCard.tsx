import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { Farm } from '../types';

interface FarmCardProps {
  farm: Farm;
  onClick: () => void;
}

export function FarmCard({ farm, onClick }: FarmCardProps) {
  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <img
        src={farm.imageUrl}
        alt={farm.name}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">{farm.name}</h3>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{farm.rating}</span>
          </div>
        </div>
        <div className="flex items-center mt-2 text-gray-500">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{farm.distance} miles away</span>
        </div>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{farm.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {farm.products.slice(0, 3).map((product) => (
            <span
              key={product.id}
              className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full"
            >
              {product.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}