import React from 'react';
import { Leaf } from 'lucide-react';

interface Field {
  id: number;
  name: string;
  type: string;
  size: string;
  crops: string[];
}

interface FieldListProps {
  fields: Field[];
}

export function FieldList({ fields }: FieldListProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <h3 className="text-xl font-semibold mb-4">Growing Areas</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {fields.map((field) => (
          <div key={field.id} className="border rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Leaf className="w-5 h-5 text-green-600" />
              <h4 className="font-semibold">{field.name}</h4>
            </div>
            <div className="text-sm text-gray-600">
              <p>Type: {field.type}</p>
              <p>Size: {field.size}</p>
              <div className="mt-2">
                <p className="font-medium">Current Crops:</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {field.crops.map((crop) => (
                    <span
                      key={crop}
                      className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs"
                    >
                      {crop}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}