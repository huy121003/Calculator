// Calculator.js
import React from 'react';
import { useCalculator } from './useCalculator';

const Calculator = () => {
  const {
    display,
    history,
    isDarkMode,
    appendToDisplay,
    clearDisplay,
    deleteLastChar,
    calculate,
    toggleTheme,
  } = useCalculator();

  return (
    <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-r from-pink-400 to-yellow-300'}`}>
      <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96 transition-all duration-300`}>
        <div className="flex justify-between mb-4">
          <button onClick={toggleTheme} className="btn bg-indigo-500 text-white hover:bg-indigo-600 transition duration-300 p-2 rounded-md">
            {isDarkMode ? 'Dark Mode' : 'Light Mode'}
          </button>
          <button onClick={clearDisplay} className="btn bg-red-600 text-white hover:bg-red-700 transition duration-300 p-2 rounded-md">C</button>
          <button onClick={deleteLastChar} className="btn bg-yellow-500 text-white hover:bg-yellow-600 transition duration-300 p-2 rounded-md">←</button>
        </div>

        <div className="border-2 border-gray-300 dark:border-gray-600 p-4 mb-4 bg-gray-200 dark:bg-gray-700 rounded-md text-right text-2xl">
          {display}
        </div>

        <div className="grid grid-cols-4 gap-4 mb-4">
          {['7', '8', '9', '/'].map((item, index) => (
            <button key={index} onClick={() => appendToDisplay(item)} className="btn bg-green-400 text-white hover:bg-green-500 transition duration-300 p-4 rounded-md">{item}</button>
          ))}
          {['4', '5', '6', '*'].map((item, index) => (
            <button key={index} onClick={() => appendToDisplay(item)} className="btn bg-orange-400 text-white hover:bg-orange-500 transition duration-300 p-4 rounded-md">{item}</button>
          ))}
          {['1', '2', '3', '-'].map((item, index) => (
            <button key={index} onClick={() => appendToDisplay(item)} className="btn bg-purple-400 text-white hover:bg-purple-500 transition duration-300 p-4 rounded-md">{item}</button>
          ))}
          <button onClick={() => appendToDisplay('0')} className="col-span-2 btn bg-blue-400 text-white hover:bg-blue-500 transition duration-300 p-4 rounded-md">0</button>
          <button onClick={() => appendToDisplay('.')} className="btn bg-blue-400 text-white hover:bg-blue-500 transition duration-300 p-4 rounded-md">.</button>
          <button onClick={calculate} className="btn bg-teal-500 text-white hover:bg-teal-600 transition duration-300 p-4 rounded-md">=</button>
        </div>

        {/* Lịch sử tính toán */}
        <div className="mt-6">
          <h3 className="text-lg font-bold">History</h3>
          <ul className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md h-32 overflow-y-scroll">
            {history.map((item, index) => (
              <li key={index} className="border-b border-gray-300 dark:border-gray-600 py-2 transition duration-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md">
                <div className="text-blue-600">{item.expression}</div>
                <div className="text-green-600 font-bold">{`= ${item.result}`}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
