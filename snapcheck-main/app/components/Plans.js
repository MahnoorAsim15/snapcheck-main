'use client'
import React, { useState } from 'react'
import PlanCard from './PlanCard'
import plansData from '../utils/plansData'

const Plans = () => {

  const [monthlyPlanState, setMonthlyPlanState]= useState(true);
 
  return (
    <div className='bg-[#0D0536] p-3 md:p-5'>
      <div className='text-white text-center my-6 space-y-6'>
        <h2 className='font-bold text-4xl'>Choose Plans</h2>
        <p>14 day Unlimited free Trail. No contract or credit card required</p>
        <div className="flex items-center gap-4 justify-center pb-8">
          <p>Monthly</p>
          <div className="relative w-[140px] h-[54px] rounded-[30px] bg-white">
            <div onClick={()=>{setMonthlyPlanState(!monthlyPlanState)}} className={`absolute h-[50px] w-[50px] rounded-full top-[2px]  transition-all ease-in-out duration-600  ${monthlyPlanState ? 'left-[2px]' : 'right-[2px]'}`} style={{background:'linear-gradient(90deg, #6E66F0 0%, #9E58F6 40.19%, #CD50C8 80.4%, #E949A2 100%)'}}></div>
          </div>
          <p>Yearly</p>
        </div>
      </div>
        <div className="flex flex-col gap-4 w-[85%] md:flex-row md:w-[90%] lg:w-[80%] m-auto justify-between items-center">
            {plansData.map((plan,index)=>(
              <div className="basis-[32%]" key={index}>
                <PlanCard {...plan} isMonthly={monthlyPlanState}  />
              </div>
            ))}
        </div>
    </div>
  )
}

export default Plans