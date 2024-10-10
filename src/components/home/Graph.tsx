import { GRAPH_DATA } from '@/utils/Helper'
import Chart from './Chart'

const Graph = () => {
    return (
        <div className='mt-7 border border-medium-gray bg-white shadow-4xl rounded-[18px] px-3 md:px-7 pt-5 pb-7'>
            <div className="flex gap-2 2xl:gap-11 items-start flex-col xl:flex-row justify-between">
                <div className="max-w-[1054px] w-full">
                    <div className="flex justify-between flex-col sm:flex-row items-center">
                        <div className="flex flex-col">
                            <p className='font-bold text-xl text-center sm:text-left font-thicccboi-bold text-off-gray'>Total Leads</p>
                            <p className='font-normal text-base text-center sm:text-left font-thicccboi-normal text-off-gray mt-3'>June 1, 2021 - June 2, 2022</p>
                        </div>
                        <div className="flex sm:gap-24 gap-14 md:gap-[129px] mt-5 sm:mt-0">
                            <div className="flex flex-col pl-2 border-s-[3px] border-deep-blue">
                                <p className="font-semibold font-thicccboi-semiBold text-custom-lg leading-7">15.25k</p>
                                <p className='text-off-gray font-thicccboi-medium text-lg font-medium -mb-0.5'>Leads</p>
                            </div>
                            <div className="flex flex-col pl-2 relative">
                                <p className="font-semibold font-thicccboi-semiBold text-custom-lg leading-7">$ 25,000</p>
                                <p className='text-off-gray font-thicccboi-medium text-lg font-medium -mb-0.5'>Revenue</p>
                                <span className='h-full w-[3px] bg-linear-green flex absolute top-0 left-0'></span>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-x-scroll sm:overflow-x-visible">
                        <div className="min-w-[600px] flex gap-2 md:gap-6 min-h-[262px] py-16">
                            <div className="flex flex-col h-full justify-between min-h-[262px]">
                                {[...Array(7)].map((_, idx) => (
                                    <p key={idx} className='font-normal text-off-gray text-right font-thicccboi-normal text-xs sm:text-sm'>{idx === 0 ? "30k" : idx === 1 ? "20k" : idx === 2 ? "15k" : idx === 3 ? "10k" : idx === 4 ? "6k" : idx === 5 ? "3k" : "1k"}</p>
                                ))}
                            </div>
                            <Chart />
                        </div>
                    </div>
                </div>
                <div className="xl:max-w-[376px] sm:mt-10 sm:pt-10 pt-5 xl:pt-0 xl:mt-2.5 w-full xl:border-s xl:border-medium-gray h-full sm:pl-6 relative">
                    {GRAPH_DATA.map((items, idx) => (
                        <div key={idx} className={idx === 0 ? "" : "sm:mt-14 mt-7"}>
                            <div className="bg-off-white backdrop-blur-md w-full rounded-lg p-4 text-off-gray font-normal font-thicccboi-normal text-xl">
                                {items.text}
                                {idx === 0 ? <p className='px-1.5 py-1 rounded-md text-sm font-medium font-plex text-off-green bg-light-green w-fit absolute right-2.5 top-4'>+15.5%</p> : null}
                            </div>
                            <p className="font-medium font-thicccboi-medium text-custom-lg leading-7 ml-4 mt-4 flex items-center gap-2">{items.data} <span className='text-off-gray font-normal font-thicccboi-normal text-xl'>Avg</span></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Graph;