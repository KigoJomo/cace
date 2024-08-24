"use client";
import React, { useState } from 'react';

const ToggleButton: React.FC = () => {
  const [isToggled, setIsToggled] = useState<boolean>(true);

  const toggleSwitch = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div
      onClick={toggleSwitch}
      className={`w-12 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 border  border-gray-400 ${
        isToggled ? 'bg-white' : 'bg-transparent'
      }`}
    >
      <div
        className={`bg-dark-blue w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
          isToggled ? 'translate-x-4' : ''
        }`}
      ></div>
    </div>
  );
};

export default ToggleButton;
