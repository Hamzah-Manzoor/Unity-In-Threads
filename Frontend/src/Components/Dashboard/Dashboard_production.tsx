// dashboard.tsx
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const calculatePercentage = (current: number, total: number): number => {
  return (current / total) * 100;
};

const Dashboard: React.FC = () => {
   // Calculate dates dynamically
   const today = new Date();
   const receivedOn = new Date(today.getFullYear(), today.getMonth(), today.getDate()); // 7 days ago
   const deliveringOn = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 10); // 7 days from now
   const remainingDays = Math.ceil((deliveringOn.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

   const totalWorkers = 18;
   const activeWorkers = 15;
   const inactiveWorkers = totalWorkers - activeWorkers;

  // Random values for Top Selling categories
  const soldShalwarKameez = 28;
  const soldKurta = 23;
  const soldWaistCoat = 32;
  const soldSherwani = 15;
  return (
    <div className="container mx-auto py-8 px-8">
      <p className="text-3xl font-semibold mb-4 text-gray-800">Production Dashboard</p>

      <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-800">Schedules and Deadlines</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Received Date */}
        <div className="p-6 bg-white shadow-md rounded-md border-t-4 border-green-500">
          <h2 className="text-xl font-semibold mb-2 text-green-500">Received Date</h2>
          <p className="text-xl font-bold text-gray-800">{receivedOn.toDateString()}</p>
        </div>

        {/* Due Date */}
        <div className="p-6 bg-white shadow-md rounded-md border-t-4 border-orange-500">
          <h2 className="text-xl font-semibold mb-2 text-orange-500">Due Date</h2>
          <p className="text-xl font-bold text-gray-800">{deliveringOn.toDateString()}</p>
        </div>

        {/* Remaining Time in Days */}
        <div className="p-6 bg-white shadow-md rounded-md border-t-4 border-red-500">
          <h2 className="text-xl font-semibold mb-2 text-red-500">Remaining Time</h2>
          <p className="text-xl font-bold text-gray-800">{remainingDays} days</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold  mb-4 mt-8 text-gray-800">Active/Inactive workers</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {/* Active Workers */}
        <div className="p-6 bg-white shadow-md rounded-md border-t-4 border-blue-500">
          <h3 className="text-lg font-semibold mb-2 text-blue-500">Active Workers</h3>
          <p className="text-xl font-bold text-gray-800">{activeWorkers}</p>
          <div className="relative mt-2" style={{ width: 120, height: 120 }}>
            <CircularProgressbar
              value={calculatePercentage(activeWorkers, totalWorkers)}
              text={`${calculatePercentage(activeWorkers, totalWorkers).toFixed(0)}%`}
              styles={buildStyles({
                textColor: '#4299e1',
                pathColor: '#4299e1',
                trailColor: '#d6d6d6',
              })}
            />
          </div>
        </div>

        {/* Inactive Workers */}
        <div className="p-6 bg-white shadow-md rounded-md border-t-4 border-gray-500">
          <h3 className="text-lg font-semibold mb-2 text-gray-500">Inactive Workers</h3>
          <p className="text-xl font-bold text-gray-800">{inactiveWorkers}</p>
          <div className="relative mt-2" style={{ width: 120, height: 120 }}>
            <CircularProgressbar
              value={calculatePercentage(inactiveWorkers, totalWorkers)}
              text={`${calculatePercentage(inactiveWorkers, totalWorkers).toFixed(0)}%`}
              styles={buildStyles({
                textColor: '#718096',
                pathColor: '#718096',
                trailColor: '#d6d6d6',
              })}
            />
          </div>
        </div>
      </div>



      {/* Additional Section for Top Selling */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Currently Produced</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {/* Shalwar Kameez */}
          <div className="p-6 bg-white shadow-md rounded-md border-t-4 border-red-500">
            <h3 className="text-lg font-semibold mb-2 text-red-500">Shalwar Kameez</h3>
            <p className="text-xl font-bold text-gray-800">{soldShalwarKameez}</p>
            <div className="relative mt-2" style={{ width: 120, height: 120 }}>
              <CircularProgressbar
                value={calculatePercentage(soldShalwarKameez, 50)}
                text={`${calculatePercentage(soldShalwarKameez, 50).toFixed(0)}%`}
                styles={buildStyles({
                  textColor: '#e53e3e',
                  pathColor: '#e53e3e',
                  trailColor: '#d6d6d6',
                })}
              />
            </div>
          </div>

          {/* Kurta */}
          <div className="p-6 bg-white shadow-md rounded-md border-t-4 border-indigo-500">
            <h3 className="text-lg font-semibold mb-2 text-indigo-500">Kurta</h3>
            <p className="text-xl font-bold text-gray-800">{soldKurta}</p>
            <div className="relative mt-2" style={{ width: 120, height: 120 }}>
              <CircularProgressbar
                value={calculatePercentage(soldKurta, 50)}
                text={`${calculatePercentage(soldKurta, 50).toFixed(0)}%`}
                styles={buildStyles({
                  textColor: '#667eea',
                  pathColor: '#667eea',
                  trailColor: '#d6d6d6',
                })}
              />
            </div>
          </div>

          {/* WaistCoat */}
          <div className="p-6 bg-white shadow-md rounded-md border-t-4 border-purple-500">
            <h3 className="text-lg font-semibold mb-2 text-purple-500">Waist Coat</h3>
            <p className="text-xl font-bold text-gray-800">{soldWaistCoat}</p>
            <div className="relative mt-2" style={{ width: 120, height: 120 }}>
              <CircularProgressbar
                value={calculatePercentage(soldWaistCoat, 50)}
                text={`${calculatePercentage(soldWaistCoat, 50).toFixed(0)}%`}
                styles={buildStyles({
                  textColor: '#9f7aea',
                  pathColor: '#9f7aea',
                  trailColor: '#d6d6d6',
                })}
              />
            </div>
          </div>

          {/* Sherwani */}
          <div className="p-6 bg-white shadow-md rounded-md border-t-4 border-yellow-500">
            <h3 className="text-lg font-semibold mb-2 text-yellow-500">Sherwani</h3>
            <p className="text-xl font-bold text-gray-800">{soldSherwani}</p>
            <div className="relative mt-2" style={{ width: 120, height: 120 }}>
              <CircularProgressbar
                value={calculatePercentage(soldSherwani, 50)}
                text={`${calculatePercentage(soldSherwani, 50).toFixed(0)}%`}
                styles={buildStyles({
                  textColor: '#fbbf24',
                  pathColor: '#fbbf24',
                  trailColor: '#d6d6d6',
                })}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
