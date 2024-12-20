import React from 'react';

interface BasicInfoStepProps {
  formData: any;
  setFormData: (data: any) => void;
}

export function BasicInfoStep({ formData, setFormData }: BasicInfoStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Farm Name
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500"
          placeholder="Enter your farm's name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          rows={4}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500"
          placeholder="Describe your farm and its mission"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Farming Approach
        </label>
        <select
          value={formData.farmingApproach.type}
          onChange={(e) =>
            setFormData({
              ...formData,
              farmingApproach: {
                ...formData.farmingApproach,
                type: e.target.value,
              },
            })
          }
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500"
        >
          <option value="organic">Organic</option>
          <option value="regenerative">Regenerative</option>
          <option value="permaculture">Permaculture</option>
          <option value="conventional">Conventional</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Farming Approach Description
        </label>
        <textarea
          value={formData.farmingApproach.description}
          onChange={(e) =>
            setFormData({
              ...formData,
              farmingApproach: {
                ...formData.farmingApproach,
                description: e.target.value,
              },
            })
          }
          rows={3}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500"
          placeholder="Describe your farming methods and practices"
        />
      </div>
    </div>
  );
}