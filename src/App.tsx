import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { FarmDetailPage } from './pages/FarmDetailPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderConfirmationPage } from './pages/OrderConfirmationPage';
import { ListFarmLandingPage } from './pages/ListFarmLandingPage';
import { ListFarmPage } from './pages/ListFarmPage';
import { JoinFarmLandingPage } from './pages/JoinFarmLandingPage';
import { ProfilePage } from './pages/ProfilePage';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/farm/:id" element={<FarmDetailPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
          <Route path="/list-your-farm" element={<ListFarmLandingPage />} />
          <Route path="/list-your-farm/onboarding" element={<ListFarmPage />} />
          <Route path="/join-farm" element={<JoinFarmLandingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}