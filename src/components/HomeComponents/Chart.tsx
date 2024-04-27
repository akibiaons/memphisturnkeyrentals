"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registering components for chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

//  TypeScript interface
interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    fill: boolean;
    backgroundColor: string;
    borderColor: string;
  }[];
}

const data: ChartData = {
  labels: [
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "Jan",
    "Feb",
    "Mar",
  ], // X-axis labels for last year of home prices
  datasets: [
    {
      label: "YTD Home Prices in Memphis",
      data: [
        180000, 195000, 210000, 210000, 200000, 195000, 164950, 173000, 167000,
        178000, 160000, 193451, 175000,
      ], // Example data points
      fill: true,
      backgroundColor: "rgb(0, 0, 0)",
      borderColor: "rgba(0, 0, 0, 0.2)",
    },
  ],
};

// Options object variable
const options = {
  responsive: true,
  scales: {
    y: {
      min: 140000,
      max: 240000,
      ticks: {
        callback: function (value: number) {
          return "$" + value / 1000 + "k";
        },
        stepSize: 50000, // Increment steps by $50k
      },
    },
  },
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Median prices in Memphis TN",
    },
  },
};

const Chart: React.FC = () => {
  return (
    <>
      <Line data={data} options={options} />
    </>
  );
};

export default Chart;
