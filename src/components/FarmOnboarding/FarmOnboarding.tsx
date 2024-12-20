import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BasicInfoStep } from './steps/BasicInfoStep';
import { LocationStep } from './steps/LocationStep';
import { ProductsStep } from './steps/ProductsStep';
import { PhotosStep } from './steps/PhotosStep';
import { useFarmStore } from '../../store/farmStore';
import { useAuthStore } from '../../store/authStore';
import { Farm } from '../../types';

export function FarmOnboarding() {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const addFarm = useFarmStore((state) => state.addFarm);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    farmingApproach: {
      type: 'organic',
      description: '',
    },
    location: {
      address: '',
      city: '',
      state: '',
    },
    products: [],
    imageUrl: '',
    gallery: [],
  });

  const steps = [
    { title: 'Basic Information', component: BasicInfoStep },
    { title: 'Location', component: LocationStep },
    { title: 'Products', component: ProductsStep },
    { title: 'Photos', component: PhotosStep },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    const newFarm: Farm = {
      id: Math.random().toString(36).substr(2, 9),
      ...formData,
      rating: 0,
      reviews: [],
      distance: 0,
      host: {
        id: user?.id || '',
        name: user?.name || '',
        avatar: user?.avatar || '',
        bio: '',
        joinedDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      },
    };

    addFarm(newFarm);
    navigate('/');
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`flex-1 ${
                index < steps.length - 1 ? 'mr-2' : ''
              }`}
            >
              <div
                className={`h-2 rounded-full ${
                  index <= currentStep
                    ? 'bg-green-600'
                    : 'bg-gray-200'
                }`}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          {steps.map((step, index) => (
            <span
              key={step.title}
              className={index <= currentStep ? 'text-green-600' : ''}
            >
              {step.title}
            </span>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <CurrentStepComponent
          formData={formData}
          setFormData={setFormData}
        />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={handleBack}
          className={`px-6 py-2 rounded-lg border border-gray-300 ${
            currentStep === 0 ? 'invisible' : ''
          }`}
        >
          Back
        </button>
        <button
          onClick={currentStep === steps.length - 1 ? handleSubmit : handleNext}
          className="px-6 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
        >
          {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
}