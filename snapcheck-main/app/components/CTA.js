import React from 'react';

const CallToAction = () => {
  return (
    <div className="bg-[#0B002D] flex flex-col items-center py-8 px-4 space-y-6">
      <h1 className="text-white text-lg font-semibold text-center">
        Monitor User Activity With Snapcheck.io
      </h1>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <button className="bg-transparent border border-white text-white rounded px-6 py-2 hover:bg-white hover:text-[#0B002D] transition">
          Request Pricing
        </button>
        <button className="bg-white text-[#0B002D] rounded px-6 py-2 hover:bg-gray-300 transition">
          Access the Demo portal
        </button>
        <button className="bg-transparent border border-white text-white rounded px-6 py-2 hover:bg-white hover:text-[#0B002D] transition">
          Request a Free Trial
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
