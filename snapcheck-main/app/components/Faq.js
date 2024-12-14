"use client";
import React, { useState } from "react";
import faqData from "../utils/FaqData";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    // Toggle the open index
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-col items-center w-max gap-3">
        <h1 className="text-purple-950 font-bold lg:text-5xl md:text-3xl text-xl">
          Frequently Asked Questions
        </h1>
        <h4 className="text-gray-950 lg:text-xl md:text-sm text-xs">
          Explore Answers to Frequently asked questions.
        </h4>
      </div>
      <div className="p-4 w-full flex flex-col items-center">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className=" border-blue-950 border-[0.5px] border-opacity-30 mb-4 p-3 rounded w-4/5 hover:cursor-pointer custom-shadow"
            onClick={() => toggleFaq(index)}
          >
            <div className="flex justify-between items-center">
              <h5 className="font-semibold cursor-pointer">{faq.question}</h5>
              <img 
                src={openIndex === index ?'/Home and contact assests/upArrow.png': '/Home and contact assests/downArrow-svg.svg'} 
                alt="Toggle Icon" 
                className="ml-2 sm:w-5 sm:h-5 h-4 w-4" 
              />
            </div>
            {openIndex === index && (
              <p className="text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;