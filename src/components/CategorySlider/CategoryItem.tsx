import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CategoryItemProps {
  name: string;
  icon: LucideIcon;
  isSelected: boolean;
  onClick: () => void;
}

export function CategoryItem({ name, icon: Icon, isSelected, onClick }: CategoryItemProps) {
  return (
    <div 
      onClick={onClick}
      className={`flex-shrink-0 w-24 text-center cursor-pointer group ${
        isSelected ? 'scale-105 transform' : ''
      }`}
    >
      <div className={`w-16 h-16 mx-auto mb-2 rounded-full flex items-center justify-center transition-colors ${
        isSelected 
          ? 'bg-green-100 ring-2 ring-green-600' 
          : 'bg-green-50 group-hover:bg-green-100'
      }`}>
        <Icon className={`w-8 h-8 ${isSelected ? 'text-green-700' : 'text-green-600'}`} />
      </div>
      <span className={`text-sm transition-colors ${
        isSelected ? 'text-green-700 font-medium' : 'text-gray-600 group-hover:text-gray-900'
      }`}>
        {name}
      </span>
    </div>
  );
}