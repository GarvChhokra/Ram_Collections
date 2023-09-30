// components/FilterSidebar.js
import React from 'react';

const FilterSidebar = () => {
  return (
    <div className="bg-gray-100 p-4">
      <h3 className="text-xl font-semibold mb-4">Filter Options</h3>

      {/* Category Filter */}
      <div className="mb-4">
        <h4 className="text-lg font-semibold">Category</h4>
        <ul className="pl-2 space-y-2">
          <li>
            <label className="flex items-center">
              <input type="checkbox" id="category-shirt" name="category" value="Shirts" className="mr-2" />
              Shirts
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input type="checkbox" id="category-pants" name="category" value="Pants" className="mr-2" />
              Pants
            </label>
          </li>
          {/* Add more category options as needed */}
        </ul>
      </div>

      {/* Size Filter */}
      <div className="mb-4">
        <h4 className="text-lg font-semibold">Size</h4>
        <ul className="pl-2 space-y-2">
          <li>
            <label className="flex items-center">
              <input type="checkbox" id="size-small" name="size" value="Small" className="mr-2" />
              Small
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input type="checkbox" id="size-medium" name="size" value="Medium" className="mr-2" />
              Medium
            </label>
          </li>
          {/* Add more size options as needed */}
        </ul>
      </div>

      {/* Price Range Filter */}
      <div>
        <h4 className="text-lg font-semibold">Price Range</h4>
        <div className="mt-2">
          {/* Add a price range slider component */}
          {/* Example: <input type="range" min="0" max="1000" step="10" /> */}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
