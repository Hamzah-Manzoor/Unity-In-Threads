import React, { useContext, useState } from 'react'
import sidebar_context from '../../context/Sidebar/Sidebar'
import { Link } from 'react-router-dom';


export default function Sidebar() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [isDropdownOpenShiftProduct, setIsDropdownShiftProducts] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
  };

  const toggleShiftProduct = () => {
    setIsDropdownShiftProducts(!isDropdownOpenShiftProduct);
  };

  const toggleDropdown3 = () => {
    setIsDropdownOpen3(!isDropdownOpen3);
  };
  const context = useContext(sidebar_context);

  console.log(context);
  return (
    <div className='flex p-0 m-0 bg-gray-800'>
        <aside id="logo-sidebar"
        className={`fixed top-0 flex-1 left-0 z-40 h-screen pt-20 transition-transform ${
          context.toggleState ? 'translate-x-0' : '-translate-x-full'
        }  border-r lg:translate-x-0 bg-gray-800 border-gray-700 w-72`}
        aria-label="Sidebar">
          <div className="h-full px-3 pb-4 overflow-y-auto bg-gray-800">
            <ul className="space-y-2 font-medium">
              <li>
                <Link to="/retail/dashboard" className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-400 transition duration-75 group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span className="flex-1 ms-3">Dashboard</span>
                </Link>
              </li>
              
              <li>
                <button
                  type="button"
                  className="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:bg-gray-600 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-example"
                  data-collapse-toggle="dropdown-example"
                  onClick={toggleDropdown}
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 21"
                  >
                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                  </svg>
                  <span className="flex-1 text-left ms-3 rtl:text-right whitespace-nowrap">Order Booking</span>
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                <ul
                  id="dropdown-example"
                  className={`py-2 space-y-2 ${isDropdownOpen ? '' : 'hidden'}`}
                >
                  <li>
                    <Link to="/retail/custom-order" className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-700">Size Form</Link>
                  </li>
                  <li>
                    <Link to="/retail/NewOrder" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">New Order</Link>
                  </li>
                  <li>
                    <Link to="/retail/resume-order" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Resume Order Entry</Link>
                  </li>
                  <li>
                    <Link to="/retail/Order-Delivery" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Order Delivery</Link>
                  </li>
                </ul>
              </li>

              <li>
                <button
                  type="button"
                  className="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:bg-gray-600 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-example"
                  data-collapse-toggle="dropdown-example"
                  onClick={toggleDropdown3}
                >
                  <svg 
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                  </svg>

                  <span className="flex-1 text-left ms-3 rtl:text-right whitespace-nowrap">Product Rate</span>
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                <ul
                  id="dropdown-example"
                  className={`py-2 space-y-2 ${isDropdownOpen3 ? '' : 'hidden'}`}
                >
                  <li>
                    <Link to="/retail/set-product-rate" className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-700">Set Product Rate</Link>
                  </li>
                  <li>
                    <Link to="/retail/update-product-rate" className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-700">Update Product Rate</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/retail/product-size" className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group">
                  <svg className="flex-shrink-0 w-5 h-5 text-gray-400 transition duration-75 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18" />
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </Link>
                <Link to="/retail/product-size" className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group">
                  <svg className="flex-shrink-0 w-5 h-5 text-gray-400 transition duration-75 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                  </svg>
                  <span className="flex-1 ms-3">Product Size</span>
                </Link>
              </li>

              <li>
                <button
                  type="button"
                  className="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:bg-gray-600 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-example"
                  data-collapse-toggle="dropdown-example"
                  onClick={toggleDropdown2}
                >
                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
                </svg>
                  <span className="flex-1 text-left ms-3 rtl:text-right whitespace-nowrap">Customer Bill</span>
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                <ul
                  id="dropdown-example"
                  className={`py-2 space-y-2 ${isDropdownOpen2 ? '' : 'hidden'}`}
                >
                  <li>
                    <Link to="/retail/new-bill" className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-700">New Bill</Link>
                  </li>
                  <li>
                    <Link to="/retail/update-bill" className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-700">Update Bill</Link>
                  </li>
                  <li>
                    <Link to="#" className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-700">Hold Product(s)</Link>
                  </li>
                  <li>
                    <Link to="#" className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-700">Refund Bill</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/retail/pair-up-product" className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group">
                <svg 
                  className="flex-shrink-0 w-5 h-5 text-gray-400 transition duration-75 group-hover:text-white"
                  xmlns="http://www.w3.org/2000/svg" 
                  x="0px" y="0px" width="100" fill="currentColor" height="100" viewBox="0 0 50 50">
                  <path d="M 25 2 C 12.318 2 2 12.318 2 25 C 2 37.682 12.318 48 25 48 C 37.682 48 48 37.682 48 25 C 48 12.318 37.682 2 25 2 z M 25 14 C 31 14 31 20 31 20 L 31 22 C 31 22 30.98621 22.541248 30.730469 23.052734 C 30.474726 23.56422 30.166667 24 29 24 C 27.833333 24 27.525274 23.56422 27.269531 23.052734 C 27.013788 22.541248 27 22 27 22 L 27 20 C 27 20 27 18 25 18 C 23 18 23 20 23 20 L 23 30 C 23 30 23 36 17 36 C 11 36 11 30 11 30 L 11 25 L 15 25 L 15 30 C 15 30 15 32 17 32 C 19 32 19 30 19 30 L 19 20 C 19 20 19 14 25 14 z M 35 25 L 39 25 L 39 30 C 39 30 39 36 33 36 C 27 36 27 30 27 30 L 27 25.492188 C 27.547197 25.796008 28.210284 26 29 26 C 29.789716 26 30.452803 25.796008 31 25.492188 L 31 30 C 31 30 31 32 33 32 C 35 32 35 30 35 30 L 35 25 z"></path>
                  </svg>
                  <span className="flex-1 ms-3">PairUp Product</span>
                </Link>
              </li>

              <li>
                <Link to="/retail/break-up-product" className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group">
                  <svg className="flex-shrink-0 w-5 h-5 text-gray-400 transition duration-75 group-hover:text-white"
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m7.848 8.25 1.536.887M7.848 8.25a3 3 0 1 1-5.196-3 3 3 0 0 1 5.196 3Zm1.536.887a2.165 2.165 0 0 1 1.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 1 1-5.196 3 3 3 0 0 1 5.196-3Zm1.536-.887a2.165 2.165 0 0 0 1.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863 2.077-1.199m0-3.328a4.323 4.323 0 0 1 2.068-1.379l5.325-1.628a4.5 4.5 0 0 1 2.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.33 4.33 0 0 0 10.607 12m3.736 0 7.794 4.5-.802.215a4.5 4.5 0 0 1-2.48-.043l-5.326-1.629a4.324 4.324 0 0 1-2.068-1.379M14.343 12l-2.882 1.664" />
                  </svg>
                  <span className="flex-1 ms-3">BreakUp Product</span>
                </Link>
              </li>

              <li>
                <button
                  type="button"
                  className="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:bg-gray-600 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-example"
                  data-collapse-toggle="dropdown-example"
                  onClick={toggleShiftProduct}
                >
                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true"
                 fill="currentColor" 
                 xmlns="http://www.w3.org/2000/svg" 
                 viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>

                  <span className="flex-1 text-left ms-3 rtl:text-right whitespace-nowrap">Shift Product</span>
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                <ul
                  id="dropdown-example"
                  className={`py-2 space-y-2 ${isDropdownOpenShiftProduct ? '' : 'hidden'}`}
                >
                  <li>
                    <Link to="/retail/order-to-ready-made" className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-700">Order To Ready Made</Link>
                  </li>
                  <li>
                    <Link to="/retail/ready-made-to-order" className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-700">Ready Made To Order</Link>
                  </li>
                  <li>
                    <Link to="/retail/ready-made-to-ready-made" className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-700">Ready Made To Ready Made</Link>
                  </li>
                </ul>
              </li>

              
              <li>
              {/* /products */}
                <Link to="/retail/products" className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group">
                  <svg className="flex-shrink-0 w-5 h-5 text-gray-400 transition duration-75 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                  </svg>
                  <span className="flex-1 ms-3">Product Page</span>
                </Link>
              </li>

              <li>
              {/* /products */}
                <Link to="/retail/add-product" className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group">
                  <svg className="flex-shrink-0 w-5 h-5 text-gray-400 transition duration-75 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                  </svg>

                  <span className="flex-1 ms-3">Add Product</span>
                </Link>
              </li>
              
              <li>
                <a href="/retail/record-retail-order" className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group">
                  <svg className="flex-shrink-0 w-5 h-5 text-gray-400 transition duration-75 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                  </svg>
                  <span className="flex-1 ms-3">Record Retail Order</span>
                </a>
              </li>

              <li>  
                <Link to="/retail/return-and-exchange" className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group">
                  <svg className="flex-shrink-0 w-5 h-5 text-gray-400 transition duration-75 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                  </svg>
                  
                  <span className="flex-1 ms-3">Returns and Exchanges</span>
                </Link>
              </li>

              {/* <li>
                <a href="#" className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group">
                  <svg className="flex-shrink-0 w-5 h-5 text-gray-400 transition duration-75 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group">
                  <svg className="flex-shrink-0 w-5 h-5 text-gray-400 transition duration-75 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                    <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                    <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                </a>
              </li> */}
            </ul>
          </div>
        </aside>
      </div>
  )
}
