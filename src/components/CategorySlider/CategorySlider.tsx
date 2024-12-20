import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CategoryItem } from './CategoryItem';
import { categories } from './categories';

interface CategorySliderProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export function CategorySlider({ selectedCategory, onSelectCategory }: CategorySliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 200;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleCategoryClick = (categoryName: string) => {
    onSelectCategory(selectedCategory === categoryName ? null : categoryName);
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={() => scroll('left')}
          className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      
      <div
        ref={sliderRef}
        className="flex overflow-x-auto gap-8 py-4 px-2 scroll-smooth hide-scrollbar"
      >
        {categories.map((category) => (
          <CategoryItem
            key={category.name}
            {...category}
            isSelected={selectedCategory === category.name}
            onClick={() => handleCategoryClick(category.name)}
          />
        ))}
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={() => scroll('right')}
          className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
}