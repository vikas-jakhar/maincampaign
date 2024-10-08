import React from 'react'
import Chart from './Chart'

const Graph = () => {
    return (
        <div className='mt-7 border border-medium-gray bg-white shadow-4xl rounded-[18px] px-7 pt-5 pb-7'>
            <div className="">
                <div className="">
                    <div className="flex flex-col">
                        <p className='font-bold text-xl thicccboi_bold text-off-gray'>Total Leads</p>
                        <p className='font-normal text-base thicccboi_normal text-off-gray mt-3'>June 1, 2021 - June 2, 2022</p>
                    </div>
                </div>
                {/* <Chart /> */}
            </div>
        </div>
    )
}

export default Graph