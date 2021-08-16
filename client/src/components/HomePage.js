import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-1/2 h-1/2 rounded shadow bg-white relative">
      <h1>hello homepage</h1>

      <button className="py-3 px-6 text-white rounded-lg bg-red-500 shadow-lg block md:inline-block">
        Logout
      </button>
    </div>
  );
};

export default HomePage;
