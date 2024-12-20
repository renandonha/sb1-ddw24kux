import React, { useState } from 'react';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { Product } from '../../../types';
import { formatPrice } from '../../../utils/formatPrice';

interface ProductCatalogProps {
  products: Product[];
  onAddProduct: () => void;
  onEditProduct: (product: Product) => void;
  onDeleteProduct: (productId: string) => void;
}

export function ProductCatalog({ products, onAddProduct, onEditProduct, onDeleteProduct }: ProductCatalogProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">Product Catalog</h3>
        <button
          onClick={onAddProduct}
          className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          <Plus className="w-4 h-4" />
          <span>Add Product</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="font-semibold mb-1">{product.name}</h4>
            <p className="text-gray-600 text-sm mb-2">{product.description}</p>
            <p className="text-green-600 font-medium mb-2">{formatPrice(product.price)}</p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => onEditProduct(product)}
                className="p-2 text-gray-600 hover:text-green-600"
              >
                <Pencil className="w-4 h-4" />
              </button>
              <button
                onClick={() => onDeleteProduct(product.id)}
                className="p-2 text-gray-600 hover:text-red-600"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}