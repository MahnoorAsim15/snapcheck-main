'use client'
import React, { useState } from 'react';
import Button from './Button';

const PlanCard = ({plan,isMonthly,price,planFeatures,isHighlighted}) => {

  return (
    <div style={{boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.25)'}}
      className={`transition-all ease-in-out flex flex-col py-6 px-4 rounded-lg ${
        isHighlighted ? 'bg-[#5D4CDD] text-white' : 'bg-white text-black'
      }`}
    >
      <h3 className="text-center font-semibold text-2xl">{plan}</h3>
      <div className="my-4 mx-auto relative">
        <h4 className="font-bold text-4xl inline-block">{price?`$${isMonthly?price:price*11}`:'Custom'}</h4>
        <p className="inline-block absolute">{price?`${isMonthly?'/mon':'/year'}`:''}</p>
      </div>
      <p className="text-[12px] pb-5">
        For teams monitoring their work productivity for the short term
      </p>
      <ul className="text-sm list-disc pl-5 space-y-3 font-semibold">
      {planFeatures.map((feature,index)=>(
        <li key={index}>{feature}</li>
      ))}
      </ul>
      <div className="mt-8 flex justify-center">
        <Button text="Get Started" styles={`font-bold text-lg ${isHighlighted? '!text-[#5D4CDD]' : ''}`} colors={isHighlighted?['white','white','white','white']:[]} />
      </div>
    </div>
  );
};

export default PlanCard;
