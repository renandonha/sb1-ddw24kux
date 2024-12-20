import React from 'react';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ProductCatalog } from './ProductCatalog';
import { TaskSection } from './Tasks/TaskSection';
import { FieldList } from './Fields/FieldList';
import { useFarmStore } from '../../../store/farmStore';
import { useAuthStore } from '../../../store/authStore';
import { farmFields } from '../../../data/farmFields';

export function FarmDashboard() {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { farms } = useFarmStore();
  
  const userFarms = farms.filter(farm => farm.host.id === user?.id);

  if (userFarms.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-12 text-center">
        <img
          src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad"
          alt="Urban farming"
          className="w-48 h-48 object-cover rounded-full mx-auto mb-6"
        />
        <h2 className="text-2xl font-semibold mb-4">No Farms Yet</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Start your journey in urban farming by listing your first farm. Share your produce with the community and make a difference.
        </p>
        <button
          onClick={() => navigate('/list-your-farm')}
          className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 mx-auto"
        >
          <Plus className="w-5 h-5" />
          <span>List Your Farm</span>
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {userFarms.map(farm => (
        <div key={farm.id} className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">{farm.name}</h2>
            <span className="text-sm text-gray-500">
              Listed since {farm.host.joinedDate}
            </span>
          </div>
          
          <FieldList fields={farmFields} />
          
          <ProductCatalog
            products={farm.products}
            onAddProduct={() => {}}
            onEditProduct={() => {}}
            onDeleteProduct={() => {}}
          />
          
          <TaskSection />
        </div>
      ))}
    </div>
  );
}