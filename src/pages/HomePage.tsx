import React, { useState } from 'react';
import { Header } from '../components/Header';
import { SearchBar } from '../components/SearchBar';
import { FarmCard } from '../components/FarmCard';
import { CategorySlider } from '../components/CategorySlider/CategorySlider';
import { useNavigate } from 'react-router-dom';
import { useFarmStore } from '../store/farmStore';
import { Farm } from '../types';

export function HomePage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const farms = useFarmStore((state) => state.farms);

  const getFilteredFarms = () => {
    let filtered = [...farms];

    if (searchLocation) {
      const locationLower = searchLocation.toLowerCase();
      filtered = filtered.filter(
        farm => 
          farm.location.city.toLowerCase().includes(locationLower) ||
          farm.location.state.toLowerCase().includes(locationLower) ||
          farm.location.address.toLowerCase().includes(locationLower)
      );
    }

    if (searchQuery) {
      const queryLower = searchQuery.toLowerCase();
      filtered = filtered.filter(
        farm =>
          farm.name.toLowerCase().includes(queryLower) ||
          farm.description.toLowerCase().includes(queryLower) ||
          farm.farmingApproach.type.toLowerCase().includes(queryLower) ||
          farm.products.some(product => 
            product.name.toLowerCase().includes(queryLower) ||
            product.description.toLowerCase().includes(queryLower) ||
            product.category.toLowerCase().includes(queryLower)
          )
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(farm => 
        farm.products.some(product => 
          product.category.toLowerCase() === selectedCategory.toLowerCase()
        ) ||
        farm.farmingApproach.type.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    return filtered;
  };

  const handleSearch = (query: string, location: string) => {
    setSearchQuery(query);
    setSearchLocation(location);
  };

  const filteredFarms = getFilteredFarms();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Fresh food every day, for everyone
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover local urban farms, fresh and organic produce, and sustainable agriculture in your neighborhood.
            </p>
          </div>
          
          <div className="mb-8">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>

        <CategorySlider 
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {(selectedCategory || searchQuery || searchLocation) && (
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">
                {filteredFarms.length} {filteredFarms.length === 1 ? 'farm' : 'farms'} found
                {selectedCategory && ` in "${selectedCategory}"`}
                {searchLocation && ` near "${searchLocation}"`}
              </h2>
              {(selectedCategory || searchQuery || searchLocation) && (
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSearchQuery('');
                    setSearchLocation('');
                  }}
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  Clear filters
                </button>
              )}
            </div>
          )}

          {filteredFarms.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">No farms found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setSearchQuery('');
                  setSearchLocation('');
                }}
                className="mt-4 text-green-600 hover:text-green-700 font-medium"
              >
                Clear filters and show all farms
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFarms.map((farm) => (
                <FarmCard 
                  key={farm.id} 
                  farm={farm} 
                  onClick={() => navigate(`/farm/${farm.id}`)}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}