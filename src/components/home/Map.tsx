"use client"
import { useState } from "react";
import Image from "next/image";
import Icon from "../common/Icons";
import { COUNTIRES_DATA } from "@/utils/Helper";

interface Country {
    name: string;
    img: string;
    data: string;
}

const Map = () => {
    const [selectedCountry, setSelectedCountry] = useState<Country>({
        name: "United States",
        img: "/assets/images/webp/united-states.png",
        data: "50.2k",
    });
    const handleCountryClick = (country: Country) => {
        setSelectedCountry(country);
    };

    return (
        <div className="mt-7 border border-medium-gray bg-white shadow-4xl rounded-[18px] pl-7 pr-3 py-7">
            <div className="flex gap-3 items-start justify-between">
                <div className="flex flex-col max-w-[1054px] w-full">
                    <p className="text-xl text-off-gray font-bold font-thicccboi-bold mb-7">Your top demographics</p>
                    <Icon className="max-w-[1042px] w-full" iconName="mapIcon" />
                </div>
                <div className="max-w-[376px] w-full border-s border-medium-gray h-full pl-3 relative">
                    <p className="font-semibold font-thicccboi-semiBold text-3xl ml-5 flex items-center gap-2">225.25k</p>
                    <div className="mt-11 bg-off-white w-full min-h-[248px] rounded-lg px-3.5 pt-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Image src={selectedCountry.img} className="max-w-[47px] w-full" alt="flag" width={94} height={94} priority />
                                <p className="font-medium font-thicccboi-medium text-xl">{selectedCountry.name}</p>
                            </div>
                            <p className="text-off-gray font-thicccboi-medium text-xl font-medium">{selectedCountry.data}</p>
                        </div>
                    </div>
                    {COUNTIRES_DATA.map((country: Country, idx: number) => (
                        <div key={idx} className={`flex items-center justify-between cursor-pointer ${idx === 0 ? "mt-5" : "mt-7"}`} onClick={() => handleCountryClick(country)} >
                            <div className="flex items-center gap-3">
                                <Image src={country.img} className="max-w-[47px] w-full" alt="flag" width={94} height={94} priority />
                                <p className="font-medium font-thicccboi-medium text-xl">{country.name}</p>
                            </div>
                            <p className="text-off-gray font-thicccboi-medium text-xl font-medium">{country.data}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Map;