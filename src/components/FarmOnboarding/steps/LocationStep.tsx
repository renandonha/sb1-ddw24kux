import React from 'react';

interface LocationStepProps {
  formData: any;
  setFormData: (data: any) => void;
}

export function LocationStep({ formData, setFormData }: LocationStepProps) {
  const handleLocationChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      location: {
        ...formData.location,
        [field]: value,
      },
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Street Address
        </label>
        <input
          type="text"
          value={formData.location.address}
          onChange={(e) => handleLocationChange('address', e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500"
          placeholder="Enter street address"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            City
          </label>
          <input
            type="text"
            value={formData.location.city}
            onChange={(e) => handleLocationChange('city', e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500"
            placeholder="Enter city"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            State
          </label>
          <input
            type="text"
            value={formData.location.state}
            onChange={(e) => handleLocationChange('state', e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500"
            placeholder="Enter state"
          />
        </div>
      </div>
    </div>
  );
}