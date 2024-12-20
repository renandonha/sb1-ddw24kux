import React from 'react';
import { Navigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { useAuthStore } from '../store/authStore';
import { Settings, LogOut, ShoppingBag, Heart, MapPin, Sprout } from 'lucide-react';
import { FarmDashboard } from '../components/Profile/FarmManagement/FarmDashboard';

export function ProfilePage() {
  const { user, isAuthenticated, logout } = useAuthStore();
  const [activeTab, setActiveTab] = React.useState('farms');

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  const tabs = [
    { id: 'farms', label: 'My Farms', icon: Sprout },
    { id: 'orders', label: 'Orders', icon: ShoppingBag },
    { id: 'favorites', label: 'Favorites', icon: Heart },
    { id: 'addresses', label: 'Addresses', icon: MapPin },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Profile Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-center mb-6">
                <img
                  src={user?.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'}
                  alt={user?.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h2 className="text-xl font-semibold">{user?.name}</h2>
                <p className="text-gray-600">{user?.email}</p>
              </div>
              
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-2 px-4 py-2 text-left rounded-lg ${
                      activeTab === tab.id
                        ? 'bg-green-50 text-green-600'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
                ))}
                <button 
                  onClick={() => logout()}
                  className="w-full flex items-center space-x-2 px-4 py-2 text-left rounded-lg hover:bg-gray-100 text-red-600"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            {activeTab === 'farms' && <FarmDashboard />}
            {activeTab === 'orders' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-6">Recent Orders</h3>
                <div className="text-gray-600">No recent orders found.</div>
              </div>
            )}
            {/* Add other tab contents as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}