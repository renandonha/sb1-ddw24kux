import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Leaf } from 'lucide-react';
import { Header } from '../components/Header';
import { ProductCarousel } from '../components/ProductCarousel';
import { ReviewSection } from '../components/ReviewSection';
import { mockFarms } from '../data/mockFarms';

export function FarmDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const farm = mockFarms.find(farm => farm.id === id);

  if (!farm) {
    return <div>Farm not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="relative">
        <img
          src={farm.imageUrl}
          alt={farm.name}
          className="w-full h-[60vh] object-cover"
        />
        <button
          onClick={() => navigate('/')}
          className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
        >
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
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
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4">Product Catalog</h2>
              <ProductCarousel products={farm.products} />
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <ReviewSection reviews={farm.reviews} />
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h3 className="text-xl font-semibold mb-4">Contact Farm</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                />
                <textarea
                  placeholder="Your message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                />
                <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}