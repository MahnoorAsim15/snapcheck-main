import React from 'react'
import Button from './Button'
import Heading from './Heading'

const HeroSection = () => {
    return (
        <>
            <div className='h-screen bg-slate-50 flex justify-center items-center'>
                <div className='w-4/6 flex flex-col items-center text-center gap-8'>
                    <div className='w-full flex justify-between'>
                        <div className='flex flex-col items-center justify-center w-full'>
                            <img className='w-16 h-auto' src="/Home and contact assests/ratingStars.svg" alt="Rating Stars" />
                            <p>"improves productivity!"</p>
                        </div>
                        <div className='flex flex-col items-center justify-center w-full'>
                            <img className='w-16 h-auto' src="/Home and contact assests/ratingStars.svg" alt="Rating Stars" />
                            <p>"best solution for remote teams"</p>
                        </div>
                        <div className='flex flex-col items-center justify-center w-full'>
                            <img className='w-16 h-auto' src="/Home and contact assests/ratingStars.svg" alt="Rating Stars" />
                            <p>"so easy to use"</p>
                        </div>
                    </div>
                    <Heading size={"4xl"} text={"Employee monitoring software with time tracking"}/>
                    <p>Boost your team productivity by 2x with an intelligent monitoring system</p>
                    <div className='flex gap-8'>
                        <div className='flex gap-2'>
                            <img className='w-4 h-auto' src="/Home and contact assests/blue-background-ticks.svg"/>
                            <span>Activity Monitoring</span>
                        </div>
                        <div className='flex gap-2'>
                            <img className='w-4 h-auto' src="/Home and contact assests/blue-background-ticks.svg"/>
                            <span>Activity Monitoring</span>
                        </div>
                        <div className='flex gap-2'>
                            <img className='w-4 h-auto' src="/Home and contact assests/blue-background-ticks.svg"/>
                            <span>Activity Monitoring</span>
                        </div>
                    </div>
                    <Button text={"Start monitoring your team - it's free!"}
                     colors={["#6E66F0", "#9E58F6", "#CD50C8", "#E949A2"]} />
                    <p>No Credit Card Required</p>
                </div>
            </div>
        </>
    )
}

export default HeroSection