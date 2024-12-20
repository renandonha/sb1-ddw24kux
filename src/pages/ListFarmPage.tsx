import React from 'react';
import { Navigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { FarmOnboarding } from '../components/FarmOnboarding/FarmOnboarding';
import { useAuthStore } from '../store/authStore';

export function ListFarmPage() {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <FarmOnboarding />
    </div>
  );
}