import React from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  code: string;
  stock: number;
  color: string;
  type: string;
  category: string;
  image: string;
}

const ProductsCard: React.FC<Product> = ({ id, name, code, stock, color, type, category, image }) => {
  return (
//     <Link to={`/products/${id}`} key={id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//   <div>
//     <Link to={`/products/${id}`}>
//       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
//     </Link>
//     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Code: {code}</p>
//     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Stock: {stock}</p>
//     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Color: {color}</p>
//     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Type: {type}</p>
//     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Category: {category}</p>
//     <img src={image} alt={name} className="w-full h-auto rounded-lg" />
//   </div>
// </Link>
<Link to={`/products/${id}`} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<img src={image} alt={name} className="w-full h-64 rounded-lg h-" />
<div className="p-5">
  <Link to={`/products/${id}`}>
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
  </Link>
  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Code: {code}</p>
     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Stock: {stock}</p>
     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Color: {color}</p>
     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Type: {type}</p>
     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Category: {category}</p>
  <Link to={`/products/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    See Detail View
    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
  </Link>
</div>
</Link>
  );
};

export default ProductsCard;
