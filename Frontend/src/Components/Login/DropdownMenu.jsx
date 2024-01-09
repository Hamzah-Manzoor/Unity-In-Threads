import React from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = () => {
  return (
    <div className="relative w-full py-4 pt-6 lg:max-w-sm">
            <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option>Retail</option>
                <option>Production</option>
            </select>
        </div>
  );
};

export default DropdownMenu;
