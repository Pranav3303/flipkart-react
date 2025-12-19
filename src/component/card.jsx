import React from "react";

const Card = () => {
  return (
    <div className="bg-gray-200 animate-pulse w-100 h-150 rounded-2xl">
      <div className="w-100 h-75 bg-gray-300 rounded-2xl"></div>

      <div className="px-10 flex flex-col gap-4 mt-4">
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="h-5 bg-gray-300 rounded w-1/2"></div>
        <div className="h-20 bg-gray-300 rounded w-full"></div>

        <div className="flex justify-between mt-4">
          <div className="h-6 bg-gray-300 rounded w-20"></div>
          <div className="h-8 bg-gray-300 rounded w-28"></div>
        </div>
      </div>
    </div>
  );
};

export default Card;