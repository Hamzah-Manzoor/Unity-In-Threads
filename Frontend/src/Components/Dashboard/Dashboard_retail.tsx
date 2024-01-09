// dashboard.tsx
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const calculatePercentage = (current: number, total: number): number => {
  return (current / total) * 100;
};

const Dashboard: React.FC = () => {
  const totalProducts = 567;
  const soldProducts = 332;
  const remainingProducts = totalProducts - soldProducts;
  const totalProductsMovedToFranchise = soldProducts + remainingProducts;

  // Random values for Top Selling categories
  const soldShalwarKameez = 87;
  const soldKurta = 73;
  const soldWaistCoat = 54;
  const soldSherwani = 32;
  return (
    <div className="container mx-auto py-8 px-8">
      <p className="text-3xl font-semibold mb-4 text-gray-800">Retail Dashboard</p>
      <p className=" grid justify-items-end text-3xl font-semibold mb-4 text-2xl">Emporium Mall, 1st Floor</p>
      <p className=" grid justify-items-end text-3xl font-semibold mb-4 text-lg">10th Jan 2024</p>

      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Overall</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">  
        {['#3490dc', '#4caf50', '#f59e0b'].map((color, index) => (
          <div
            key={index}
            className={`p-6 bg-white shadow-md rounded-md border-t-4 border-${color.substr(1)}`}
          >
            <h2 className={`text-xl font-semibold mb-2 text-${color.substr(1)}`}>
              {['Total Products Sold', 'Total Remaining Products', 'Total Products Arrived'][index]}
            </h2>
            <p className="text-2xl font-bold text-gray-800">
              {[
                `${soldProducts}/${totalProducts}`,
                `${remainingProducts}/${totalProducts}`,
                `${totalProductsMovedToFranchise}/${totalProducts}`
              ][index]}
            </p>
            <div className="relative mt-2" style={{ width: 120, height: 120 }}>
              <CircularProgressbar
                value={calculatePercentage(
                  [soldProducts, remainingProducts, totalProductsMovedToFranchise][index],
                  totalProducts
                )}
                text={`${calculatePercentage(
                  [soldProducts, remainingProducts, totalProductsMovedToFranchise][index],
                  totalProducts
                ).toFixed(0)}%`}
                styles={buildStyles({
                  textColor: color,
                  pathColor: color,
                  trailColor: '#d6d6d6',
                })}
              />
            </div>
          </div>
        ))}
      </div>


      {/* Additional Section for Top Selling */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Top Selling</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {/* Shalwar Kameez */}
          <div className="p-6 bg-white shadow-md rounded-md border-t-4 border-red-500">
            <h3 className="text-lg font-semibold mb-2 text-red-500">Shalwar Kameez</h3>
            <p className="text-xl font-bold text-gray-800">{soldShalwarKameez}</p>
            <div className="relative mt-2" style={{ width: 120, height: 120 }}>
              <CircularProgressbar
                value={calculatePercentage(soldShalwarKameez, 100)}
                text={`${calculatePercentage(soldShalwarKameez, 100).toFixed(0)}%`}
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
                value={calculatePercentage(soldKurta, 100)}
                text={`${calculatePercentage(soldKurta, 100).toFixed(0)}%`}
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
                value={calculatePercentage(soldWaistCoat, 100)}
                text={`${calculatePercentage(soldWaistCoat, 100).toFixed(0)}%`}
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
                value={calculatePercentage(soldSherwani, 100)}
                text={`${calculatePercentage(soldSherwani, 100).toFixed(0)}%`}
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
