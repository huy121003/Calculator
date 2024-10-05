// useCalculator.js
import { useState, useEffect } from 'react';
import { create, all } from 'mathjs';

const math = create(all);

export const useCalculator = () => {
  const [display, setDisplay] = useState('');
  const [history, setHistory] = useState(() => {
    const savedHistory = localStorage.getItem('history');
    return savedHistory ? JSON.parse(savedHistory) : [];
  });
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  const appendToDisplay = (value) => {
    setDisplay((prev) => prev + value);
  };

  const clearDisplay = () => setDisplay('');
  
  const deleteLastChar = () => {
    setDisplay((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    try {
      let expression = display.replace(/×/g, '*').replace(/x/g, '*');
      const result = math.evaluate(expression).toString();
      const newHistory = [...history, { expression: display, result }];
      setHistory(newHistory);
      setDisplay(result);
      localStorage.setItem('history', JSON.stringify(newHistory)); // Lưu lịch sử vào localStorage
    } catch {
      setDisplay('Error');
    }
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return {
    display,
    history,
    isDarkMode,
    appendToDisplay,
    clearDisplay,
    deleteLastChar,
    calculate,
    toggleTheme,
  };
};
