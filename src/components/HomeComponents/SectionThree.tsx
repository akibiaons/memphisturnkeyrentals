import React from "react";

export default function SectionThree() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      <div className="bg-gray-200 p-4 hover:bg-gray-300 transition-colors">
        <p className="text-2xl font-bold">Metro Area Stats</p>
        <div>
          <p className="text-lg font-semibold">Population</p>
          <p>1,341,746</p>
        </div>
        <div>
          <p className="text-lg font-semibold">Household Income</p>
          <p>$58K</p>
        </div>
        <div>
          <p className="text-lg font-semibold">Unemployment</p>
          <p>3.8%</p>
        </div>
        <div>
          <p className="text-lg font-semibold">Other Stats</p>
          <ul>
            <li>
              <p>
                23rd largest city in U.S with cost of living 15% below national
                avg
              </p>
            </li>
            <li>
              <p>Rental rate to property price ratio of 1.22</p>
            </li>
            <li>
              <p>8% vacancy rate</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-200 p-4 hover:bg-gray-300 transition-colors">
        <p className="text-2xl font-bold">Median Home Value</p>
        <div>
          <p className="text-lg font-semibold">Memphis</p>
          <p>$93,700</p>
        </div>
        <div>
          <p className="text-lg font-semibold">National Avg</p>
          <p>$184,700</p>
        </div>
        <div>
          <p>Memphis is 49% below the national avg</p>
        </div>
      </div>
      <div className="bg-gray-200 p-4 hover:bg-gray-300 transition-colors">
        <p className="text-2xl font-bold">Renters</p>
        <div>
          <p className="text-lg font-semibold">Memphis</p>
          <p>52%</p>
        </div>
        <div>
          <p className="text-lg font-semibold">National Avg</p>
          <p>36%</p>
        </div>
      </div>
      <div className="bg-gray-200 p-4 hover:bg-gray-300 transition-colors">
        <p className="text-2xl font-bold">Avg Monthly Rent</p>
        <div>
          <p className="text-lg font-semibold">Memphis</p>
          <p>$940</p>
        </div>
        <div>
          <p className="text-lg font-semibold">National Avg</p>
          <p>$1,231</p>
        </div>
      </div>
      <div className="bg-gray-200 p-4 hover:bg-gray-300 transition-colors">
        <p className="text-2xl font-bold">Monthly Owner Costs</p>
        <div>
          <p className="text-lg font-semibold">Memphis</p>
          <p>$937</p>
        </div>
        <div>
          <p className="text-lg font-semibold">National Avg</p>
          <p>$1,077</p>
        </div>
      </div>
      <div className="bg-gray-200 p-4 hover:bg-gray-300 transition-colors">
        <p className="text-2xl font-bold">Median Real Estate Tax</p>
        <div>
          <p className="text-lg font-semibold">Memphis</p>
          <p>$1,659</p>
        </div>
        <div>
          <p className="text-lg font-semibold">National Avg</p>
          <p>$2,197</p>
        </div>
      </div>
    </div>
  );
}
