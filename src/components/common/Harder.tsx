"use client"
import React, { useState } from 'react'
import Icon from './Icons'
import Link from 'next/link'

const Harder = () => {
    const [activeIndex, setActiveIndex] = useState<number>(1);
    const handleToggle = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div className="min-h-screen w-full max-w-[250px] 2xl:max-w-[300px]">
            <div className='fixed top-0 left-0 min-h-screen w-full max-w-[250px] 2xl:max-w-[300px] flex flex-col justify-between bg-white p-3.5'>
                <div className="mt-12 pt-1">
                    <Link href='/' className='mx-auto w-fit flex'>
                        <Icon iconName='ainIcon' />
                    </Link>
                    {[...Array(3)].map((_, idx) => (
                        <button key={idx} onClick={() => handleToggle(idx)} className={`max-w-[247px] w-full hover:scale-95 transition_slow rounded-xl font-thicccboi-semiBold py-4 px-7 flex items-center gap-3.5 font-semibold text-sm ${idx === 0 ? "mt-16" : "mt-0.5"} ${activeIndex === idx ? "bg-deep-blue text-light-gray" : "text-off-gray"}`} >
                            <Icon className='transition_slow' strokeClass={activeIndex === idx ? "stroke-light-gray" : "stroke-off-gray"} fillActive={activeIndex === idx ? "fill-light-gray" : "fill-off-gray"} iconName={idx === 0 ? "dashIcon" : idx === 1 ? "analyticsIcon" : "teamIcon"} activeClass={`${activeIndex === idx ? "fill-light-gray" : "fill-off-gray"}`} />
                            {idx === 0 ? "Dashboard" : idx === 1 ? "Analytics" : "Leads Center"}
                        </button>
                    ))}
                    <p className='mt-8 ml-6 uppercase text-deep-blue font-thicccboi-semiBold font-semibold text-sm tracking-[0.25em]'>MORE</p>
                    {[...Array(2)].map((_, index) => (
                        <Link key={index} href='/' className='flex items-center transition_slow hover:scale-95 ml-6 font-thicccboi-semiBold mt-5 gap-6 font-semibold text-sm text-off-gray'>
                            <Icon iconName={index === 0 ? "settingIcon" : "supportIcon"} />
                            {index === 0 ? "Settings" : "Support"}
                        </Link>
                    ))}
                </div>
                <Link href='/' className='flex items-center transition_slow hover:scale-95 ml-8 mb-2 font-thicccboi-semiBold mt-5 gap-3.5 font-semibold text-sm text-off-red'>
                    <Icon iconName='logoutIcon' />
                    Logout
                </Link>
            </div>
        </div>
    )
}

export default Harder;