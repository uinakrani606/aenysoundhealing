'use client';

import React, { useState, useRef, useEffect } from "react";

const CustomDropdown = ({
  options,
  placeholder,
  value,
  onChange,
  name,
}:any) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const selectedOption = options.find(
    (option:any) => option.value === value
  );
    useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);



  return (
    <div ref={dropdownRef} className="relative w-full">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-[15px] border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 focus:border-orange cursor-pointer"
      >
        <span>
          {selectedOption ? selectedOption.label : placeholder}
        </span>

        <svg
          className={`h-4 w-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 z-50 mt-2 overflow-hidden rounded-[15px] border border-gray-200 bg-white shadow-lg">
          {options.map((option:any) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange({
                  target: {
                    name,
                    value: option.value,
                  },
                });
                setIsOpen(false);
              }}
              className={`block w-full px-4 py-3 text-left text-sm transition-all
                ${
                  value === option.value
                    ? "bg-orange text-white"
                    : "hover:bg-gray-200 hover:text-black"
                }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;