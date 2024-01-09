import React from 'react'
import { useState } from 'react';
import Sherwani from '../Froms/Sherwani';
import Suits from '../Froms/Suits';
export default function CustomOrder() {
        const [selectedOption, setSelectedOption] = useState('');
        const [showForm, setShowForm] = useState(false);
      
        //My name is 
        const handleDropdownChange = (event) => {
          setSelectedOption(event.target.value);
          setShowForm(true);
        };

        const renderForm = () => {
          switch (selectedOption) {
            case 'Sherwani':
              return <Sherwani heading={"Sherwani"}></Sherwani>;
            case 'Three Piece Suits':
              return <Suits heading={"Three Piece Suits"}></Suits>;
            case 'Shalwar Kameez':
              return <h1>Earnings Form</h1>;
            default:
              return null;
          }
        };
        
      
        // const renderForm = () => {
        //   switch (selectedOption) {
        //     case 'dashboard':
        //       // return <DashboardForm />;
        //     case 'settings':
        //       // return <SettingsForm />;
        //     case 'earnings':
        //       return <EarningsForm />;
        //     case 'signout':
        //       return <SignoutForm />;
        //     default:
        //       return null;
        //   }
        //};
        
      
  return (
    <div className="flex justify-center h-full min-h-screen pt-20 text-center">
    
        <div className='w-8/12 pb-5'>
          <select
            onChange={handleDropdownChange}
            className="text-white mb-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <option value="">Select an option</option>
            <option value="Sherwani">Sherwani</option>
            <option value="Three Piece Suits">Three Piece Suits</option>
            <option value="Shalwar Kameez">Shalwar Kameez</option>
            
          </select>
    
          

        {showForm && (
          
            <div className="w-full mt-1 bg-white divide-y divide-gray-100 rounded-lg shadow h-100 dark:bg-gray-700 top-full">
              {renderForm()}
            </div>
          )}
        </div>
        </div>
      );
}