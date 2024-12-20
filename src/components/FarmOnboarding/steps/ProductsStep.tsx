import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

interface ProductsStepProps {
  formData: any;
  setFormData: (data: any) => void;
}

export function ProductsStep({ formData, setFormData }: ProductsStepProps) {
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    sizes: [''],
  });

  const addProduct = () => {
    if (newProduct.name && newProduct.price) {
      const product = {
        ...newProduct,
        id: Math.random().toString(36).substr(2, 9),
        imageUrl: 'https://images.unsplash.com/photo-1576675466969-38eeae4b41f6',
      };
      
      setFormData({
        ...formData,
        products: [...(formData.products || []), product],
      });
      
      setNewProduct({
        name: '',
        description: '',
        price: '',
        category: '',
        sizes: [''],
      });
    }
  };

  const removeProduct = (productId: string) => {
    setFormData({
      ...formData,
      products: formData.products.filter((p: any) => p.id !== productId),
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Product Name
          </label>
          <input
            type="text"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500"
            placeholder="Enter product name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500"
            placeholder="Describe your product"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price
            </label>
            <input
              type="text"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500"
              placeholder="$0.00"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <input
              type="text"
              value={newProduct.category}
              onChange={(e) =>
                setNewProduct({ ...newProduct, category: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500"
              placeholder="Enter category"
            />
          </div>
        </div>

        <button
          onClick={addProduct}
          className="flex items-center space-x-2 text-green-600 hover:text-green-700"
        >
          <Plus className="w-4 h-4" />
          <span>Add Product</span>
        </button>
      </div>

      {/* Product List */}
      <div className="space-y-4">
        <h3 className="font-medium text-gray-900">Added Products</h3>
        {formData.products?.map((product: any) => (
          <div
            key={product.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div>
              <h4 className="font-medium">{product.name}</h4>
              <p className="text-sm text-gray-600">{product.price}</p>
            </div>
            <button
              onClick={() => removeProduct(product.id)}
              className="text-gray-400 hover:text-red-500"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}