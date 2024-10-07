"use client"
import React, { useState, useRef } from 'react'
import Harder from '../common/Harder'
import Icon from '../common/Icons';
import Image from 'next/image';
import Card from './Card';

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
        <div className='bg-off-white w-full pr-1 flex'>
            <Harder />
            <div className="ml-5 max-w-[1490px] w-full mt-7 pt-0.5 mr-14">
                <div className="bg-white border border-medium-gray rounded-[18px] flex justify-between w-full py-4 px-5">
                    <div className="ml-1">
                        <h2 className='thicccboi_SemiBold font-semibold text-custom-xl'>Welcome Back!</h2>
                        <p className='font-normal thicccboi_regular text-base text-off-gray'>Track your Facebook Data Analytics here</p>
                    </div>
                    <div className="flex items-center">
                        {[...Array(4)].map((_, idx) => (
                            <button key={idx} onClick={() => handleToggle(idx)} className={`font-medium text-sm thicccboi_medium backdrop-blur-xl h-10 border transition_slow hover:scale-95 rounded-full ${activeIndex === idx ? "bg-deep-blue border-deep-blue text-white" : "border-light-gray text-off-gray bg-off-white"} ${idx === 0 ? "w-[87px]" : "w-[77px] mx-2"}`}>
                                {idx === 0 ? "24 hours" : idx === 1 ? "7 days" : idx === 2 ? "30 days" : "1 year"}
                            </button>
                        ))}
                        <button onClick={openDatePicker} className="w-[50px] h-[50px] transition_slow hover:scale-95 ml-2.5 overflow-hidden relative grid place-items-center border-light-gray text-off-gray bg-off-white border rounded-xl">
                            <Icon iconName='calendarIcon' className='cursor-pointer relative z-10' />
                            <input ref={dateInputRef} type="date" className='right-0 opacity-0 absolute -bottom-1/2 left-0' />
                        </button>
                        {[...Array(2)].map((_, index) => (
                            <button key={index} className="w-[50px] h-[50px] transition_slow hover:scale-95 ml-3.5 grid place-items-center border-light-gray text-off-gray bg-off-white border rounded-xl">
                                <Icon iconName={index === 0 ? "graySettingIcon" : "bellIcon"} className='cursor-pointer relative z-10' />
                            </button>
                        ))}
                        <button className="relative w-[57] h-[57px] ml-7 pl-0.5 ">
                            <Image src='/assets/images/webp/logo.png' className='max-w-[57px] w-full' alt='icon' width={114} height={114} priority />
                            <Icon iconName='tickIcon' className='absolute bottom-0 -right-1.5' />
                        </button>
                    </div>
                </div>
                <Card />
            </div>
        </div>
    )
}

export default Hero;