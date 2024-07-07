import React, { useState } from "react";

const MortgageCalculator = ({ price }: { price: number }) => {
  const [downPayment, setDownPayment] = useState<number>(20); // Default to 20%
  const [loanTerm, setLoanTerm] = useState<number>(30); // Default to 30 years
  const [interestRate, setInterestRate] = useState<number>(4.0); // Default to 4%

  const calculateMonthlyPayment = () => {
    const principal = price - (downPayment / 100) * price;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    return (
      (principal *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1)
    );
  };

  const formattedMonthlyPayment = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Math.abs(calculateMonthlyPayment()));

  return (
    <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-900">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
          Home Price
        </label>
        <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-gray-50">
          ${price.toLocaleString()}
        </p>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
          Down Payment (%)
        </label>
        <input
          type="number"
          value={downPayment}
          onChange={(e) => setDownPayment(parseFloat(e.target.value))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
          Loan Term (years)
        </label>
        <input
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(parseFloat(e.target.value))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
          Interest Rate (%)
        </label>
        <input
          type="number"
          step="0.01"
          value={interestRate}
          onChange={(e) => setInterestRate(parseFloat(e.target.value))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
          Estimated Monthly Payment
        </label>
        <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-gray-50">
          {formattedMonthlyPayment}
        </p>
      </div>
    </div>
  );
};

export default MortgageCalculator;
