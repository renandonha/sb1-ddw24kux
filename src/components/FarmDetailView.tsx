import React from 'react';
import { Farm } from '../types';
import { ProductCarousel } from './ProductCarousel';
import { ReviewSection } from './ReviewSection';
import { User, Leaf } from 'lucide-react';

interface FarmDetailViewProps {
  farm: Farm;
  onClose: () => void;
}

export function FarmDetailView({ farm, onClose }: FarmDetailViewProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 text-center">
        <div className="inline-block w-full max-w-4xl my-8 text-left align-middle bg-white rounded-2xl shadow-xl transform transition-all">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            ×
          </button>

          <img
            src={farm.imageUrl}
            alt={farm.name}
            className="w-full h-96 object-cover rounded-t-2xl"
          />

          <div className="p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{farm.name}</h1>
                <p className="text-gray-600">
                  {farm.location.city}, {farm.location.state}
                </p>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5 text-green-600" />
                  <span className="font-semibold">Hosted by {farm.host.name}</span>
                </div>
                <p className="text-sm text-gray-500">Member since {farm.host.joinedDate}</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">About this farm</h2>
              <p className="text-gray-700 whitespace-pre-line">{farm.description}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Farming Approach</h2>
              <div className="flex items-center space-x-2 mb-2">
                <Leaf className="w-5 h-5 text-green-600" />
                <span className="font-semibold capitalize">{farm.farmingApproach.type}</span>
              </div>
              <p className="text-gray-700">{farm.farmingApproach.description}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Product Catalog</h2>
              <ProductCarousel products={farm.products} />
            </div>

            <ReviewSection reviews={farm.reviews} />
          </div>
        </div>
      </div>
    </div>
  );
}