import React from 'react';
import { Upload } from 'lucide-react';

interface PhotosStepProps {
  formData: any;
  setFormData: (data: any) => void;
}

export function PhotosStep({ formData, setFormData }: PhotosStepProps) {
  const handleMainPhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // In a real app, you would handle file upload here
    // For now, we'll use a placeholder image
    setFormData({
      ...formData,
      imageUrl: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad',
    });
  };

  const handleGalleryPhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // In a real app, you would handle multiple file uploads here
    // For now, we'll use placeholder images
    setFormData({
      ...formData,
      gallery: [
        'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad',
        'https://images.unsplash.com/photo-1589923158776-cb4485d99fd6',
      ],
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Main Photo
        </label>
        <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
          <div className="space-y-1 text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <div className="flex text-sm text-gray-600">
              <label className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500">
                <span>Upload a file</span>
                <input
                  type="file"
                  className="sr-only"
                  onChange={handleMainPhotoChange}
                  accept="image/*"
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Gallery Photos
        </label>
        <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
          <div className="space-y-1 text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <div className="flex text-sm text-gray-600">
              <label className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500">
                <span>Upload files</span>
                <input
                  type="file"
                  className="sr-only"
                  onChange={handleGalleryPhotoChange}
                  accept="image/*"
                  multiple
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">
              Up to 5 photos, PNG, JPG, GIF up to 10MB each
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}