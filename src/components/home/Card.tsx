import { CARD_DATA } from "@/utils/Helper";
import Icon from "../common/Icons";
import LineChart from "./LineChart";

const Card = () => {
    return (
        <div className='flex flex-row flex-wrap -mx-3.5 mt-4'>
            {CARD_DATA.map((items, idx) => (
                <div key={idx} className="2xl:w-[20%] xl:w-4/12 px-3.5 mt-3.5 2xl:mt-0">
                    <div className="w-full h-full bg-white border relative overflow-hidden pb-16 border-medium-gray rounded-[18px] shadow-3xl pt-5 px-2 min-h-[159px]">
                        <div className="ml-2.5 flex items-center justify-between gap-2">
                            <p className="text-off-gray text-xl font-semibold font-thicccboi-semiBold flex items-center gap-2.5">{items.title} <Icon iconName="dotIcon" /></p>
                            <p className={`px-1.5 py-1 rounded-md text-sm font-medium font-plex ${idx === 4 ? "text-off-pink bg-light-pink" : "text-off-green bg-light-green"}`}>{items.data}</p>
                        </div>
                        <p className="mt-5 ml-2.5 font-semibold font-thicccboi-semiBold text-3xl">{items.number}</p>
                        <LineChart
                            lineColor={idx === 4 ? 'rgba(255, 105, 180, 1)' : 'rgba(75, 192, 192, 1)'} // Pink for last index
                            fillColor={idx === 4 ? 'rgba(255, 182, 193, 0.3)' : 'rgba(144, 238, 144, 0.3)'} // Light pink for last index
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}


export default Card