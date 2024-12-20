import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { ProductQuantitySelector } from './ProductQuantitySelector';
import { ProductSizeSelector } from './ProductSizeSelector';
import { useCart } from '../context/CartContext';

interface ProductCarouselProps {
  products: Product[];
}

export function ProductCarousel({ products }: ProductCarouselProps) {
  const { addItem } = useCart();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quantities, setQuantities] = useState<Record<string, number>>(
    Object.fromEntries(products.map((p) => [p.id, 1]))
  );
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>(
    Object.fromEntries(products.map((p) => [p.id, p.sizes?.[0] || '']))
  );

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleAddToCart = (product: Product) => {
    const quantity = quantities[product.id];
    const size = selectedSizes[product.id];
    
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity,
      size,
      imageUrl: product.imageUrl,
    });
  };

  return (
    <div className="relative overflow-hidden">
      <div className="relative min-h-[32rem]">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`absolute w-full transition-all duration-300 transform ${
              index === currentIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                  <p className="text-green-600 font-semibold mt-2">{product.price}</p>
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div className="space-y-6">
                  {product.sizes && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Size
                      </label>
                      <ProductSizeSelector
                        sizes={product.sizes}
                        selectedSize={selectedSizes[product.id]}
                        onSizeChange={(size) =>
                          setSelectedSizes((prev) => ({ ...prev, [product.id]: size }))
                        }
                      />
                    </div>
                  )}

                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Quantity
                      </label>
                      <ProductQuantitySelector
                        quantity={quantities[product.id]}
                        onQuantityChange={(quantity) =>
                          setQuantities((prev) => ({ ...prev, [product.id]: quantity }))
                        }
                      />
                    </div>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="flex-1 flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors h-[42px] mt-8"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button
        onClick={prevSlide}
        className="absolute left-0 top-32 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-32 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>
    </div>
  );
}