import React from 'react';

interface SortMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSortChange: (sortBy: 'number' | 'name') => void;
  currentSort: 'number' | 'name';
}

export const SortMenu: React.FC<SortMenuProps> = ({ 
  isOpen, 
  onClose, 
  onSortChange, 
  currentSort 
}) => {
  const handleSortChange = (sortBy: 'number' | 'name') => {
    onSortChange(sortBy);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="absolute top-10 sm:top-12 right-0 bg-white rounded-lg shadow-lg border border-gray-200 z-20 min-w-48">
      <div className="py-3 px-4">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Sort by:</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              name="sortBy"
              value="number"
              checked={currentSort === 'number'}
              onChange={() => handleSortChange('number')}
              className="text-[#DC0A2D] focus:ring-[#DC0A2D]"
            />
            <span className="text-sm text-gray-700">Number</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              name="sortBy"
              value="name"
              checked={currentSort === 'name'}
              onChange={() => handleSortChange('name')}
              className="text-[#DC0A2D] focus:ring-[#DC0A2D]"
            />
            <span className="text-sm text-gray-700">Name</span>
          </label>
        </div>
      </div>
    </div>
  );
};