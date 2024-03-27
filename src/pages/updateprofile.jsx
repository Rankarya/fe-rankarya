import React from 'react';
import { useTheme } from "../context/ThemeContext";

export default function UpdateProfile() {
  const { theme } = useTheme();

  const inputFields = [
    { label: "Display Name", type: "text" },
    { label: "Pronouns", type: "text" },
    { label: "Country", type: "text" },
    { label: "About Me", type: "text" },
    { label: "Wallet Address", type: "text" }
  ];

  return (
    <>
      <div className={`flex flex-col gap-4 mt-10 ${theme === 'dark' ? 'text-white' : ''}`}>
        {inputFields.map((field, index) => (
          <div key={index} className="flex flex-col gap-1">
            <label className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{field.label}</label>
            <input 
              type={field.type} 
              className={`w-[600px] focus:outline-none py-2 ${theme === 'dark' ? 'bg-neutral-900 text-white border-b border-b-white hover:bg-neutral-800 hover:rounded-t-md' : 'border-b border-b-gray-300 bg-stone-100 '}`}
            />
          </div>
        ))}

        <div className={`flex items-center rounded-md duration-300 p-2 w-[180px] hover:cursor-pointer  ${theme === 'dark' ? 'bg-neutral-900 text-white hover:bg-neutral-700' : 'hover:bg-stone-200'}`}>
          <img className="w-12 h-12" src="../src/assets/metamask-seeklogo.svg" alt="MetaMask Logo" />
          <label className={`text-xs text-orange-400 font-bold cursor-pointer ${theme === 'dark' ? 'text-white' : ''}`}>
            Connect with Metamask
          </label>
        </div>
      </div>
    </>
  );
}
