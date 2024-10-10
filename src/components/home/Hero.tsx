"use client"
import React, { useState, useRef } from 'react'
import Harder from '../common/Harder'
import Icon from '../common/Icons';
import Image from 'next/image';
import Card from './Card';
import Graph from './Graph';
import Map from './Map';

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState<number>(3);
    const dateInputRef = useRef<HTMLInputElement>(null);
    const handleToggle = (index: number) => {
        setActiveIndex(index);
    };
    const openDatePicker = () => {
        if (dateInputRef.current) {
            dateInputRef.current.showPicker();
        }
    };

    return (
        <div className='bg-off-white w-full 2xl:pr-1 flex overflow-hidden p-px'>
            <Harder />
            <div className="lg:pl-5 max-w-[1490px] w-full mt-7 px-3 lg:pr-3">
                <div className="bg-white border xl:flex-row flex-col border-medium-gray rounded-[18px] flex justify-center xl:justify-between w-full py-4 px-5">
                    <div className="ml-1">
                        <h2 className='font-thicccboi-semiBold font-semibold text-center sm:text-left text-custom-xl'>Welcome Back!</h2>
                        <p className='font-normal font-thicccboi-regular text-center sm:text-left text-base text-off-gray'>Track your Facebook Data Analytics here</p>
                    </div>
                    <div className="flex items-center flex-col sm:flex-row justify-between">
                        <div className="flex items-center mt-2">
                            {[...Array(4)].map((_, idx) => (
                                <button key={idx} onClick={() => handleToggle(idx)} className={`font-medium text-sm font-thicccboi-medium backdrop-blur-xl h-10 border transition_slow hover:scale-95 rounded-full ${activeIndex === idx ? "bg-deep-blue border-deep-blue text-white" : "border-light-gray text-off-gray bg-off-white"} ${idx === 0 ? "w-[70px] sm:w-[87px]" : "w-[70px] sm:w-[77px] mx-1 sm:mx-2"}`}>
                                    {idx === 0 ? "24 hours" : idx === 1 ? "7 days" : idx === 2 ? "30 days" : "1 year"}
                                </button>
                            ))}
                        </div>
                        <div className="flex items-center my-2">
                            <button onClick={openDatePicker} className="w-[50px] h-[50px] transition_slow hover:scale-95 ml-2.5 overflow-hidden relative grid place-items-center border-light-gray text-off-gray bg-off-white border rounded-xl">
                                <Icon iconName='calendarIcon' className='cursor-pointer relative z-10' />
                                <input ref={dateInputRef} type="date" className='right-0 opacity-0 absolute -bottom-1/2 left-0' />
                            </button>

                            {[...Array(2)].map((_, index) => (
                                <button key={index} className="w-[50px] h-[50px] transition_slow hover:scale-95 ml-3.5 grid place-items-center border-light-gray text-off-gray bg-off-white border rounded-xl">
                                    <Icon iconName={index === 0 ? "graySettingIcon" : "bellIcon"} className='cursor-pointer relative z-10' />
                                </button>
                            ))}
                        </div>
                        <button className="relative w-[57px] h-[57px] ml-7 pl-0.5 transition_slow hover:scale-95">
                            <Image src='/assets/images/webp/logo.webp' className='max-w-[57px] w-full' alt='icon' width={114} height={114} priority />
                            <Icon iconName='tickIcon' className='absolute bottom-0 -right-1.5' />
                        </button>
                    </div>
                </div>
                <Card />
                <Graph />
                <Map />
            </div>
        </div>
    )
}

export default Hero;