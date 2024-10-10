"use client"
import React, { useRef } from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend, ChartOptions, ChartData, } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const Chart: React.FC = () => {
    const chartRef = useRef<any>(null);
    const data: ChartData<'bar'> = {
        labels: ['Jun 2021', 'Jul 2021', 'Aug 2021', 'Sep 2021', 'Oct 2021', 'Nov 2021', 'Dec 2021', 'Jan 2022', 'Feb 2022', 'Mar 2022', 'Apr 2022', 'May 2022', 'Jun 2022'],
        datasets: [
            {
                label: 'Leads',
                data: [20000, 25000, 7500, 14000, 11000, 22000, 22000, 9000, 18000, 6000, 13000, 29000, 16000],
                backgroundColor: '#3B5998',
                borderWidth: 3,
                borderColor: '#FFFFFF',
                hoverBorderColor: '#FFFFFF',
                barThickness: 15,
            },
            {
                label: 'Revenue',
                data: [15000, 10000, 12000, 20000, 19000, 17000, 20500, 10000, 15000, 9000, 13000, 18000, 30000],
                backgroundColor: (context: { chart: { ctx: CanvasRenderingContext2D; chartArea: { top: number; bottom: number } } }) => {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;
                    if (!chartArea) {
                        return '#88FFBF';
                    }
                    return getGradient(ctx, chartArea);
                },
                borderWidth: 3,
                borderColor: '#FFFFFF',
                hoverBorderColor: '#FFFFFF',
                barThickness: 15,
            },
        ],
    };
    const getGradient = (ctx: CanvasRenderingContext2D, chartArea: any) => {
        const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
        gradient.addColorStop(0, '#88FFBF');
        gradient.addColorStop(1, 'rgba(62, 254, 151, 0.12)');
        return gradient;
    };
    const options: ChartOptions<'bar'> = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            y: {
                beginAtZero: false,
                ticks: {
                    display: false,
                },
                grid: {
                    display: false,
                },
                min: 1000,
                max: 30000,
            },
            x: {
                ticks: {
                    display: false,
                },
                grid: {
                    display: false,
                },
            },
        },
        plugins: {
            title: {
                display: false,
                text: 'Monthly Data from Jun 2021 to Jun 2022',
            },
            legend: {
                display: false,
                position: 'top',
            },
        },
    };

    return (
        <div className='max-w-[964px] w-full md:ml-auto h-[262px]'>
            <Bar data={data} options={options} ref={chartRef} />
            <div className="flex items-center justify-between px-3 md:mt-5 mt-2">
                {[...Array(13)].map((_, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                        <p className='font-normal text-off-gray text-center font-thicccboi-normal text-sm'>{idx === 0 ? "Jun" : idx === 1 ? "Jul" : idx === 2 ? "Aug" : idx === 3 ? "Sep" : idx === 4 ? "Oct" : idx === 5 ? "Nov" : idx === 6 ? "Dec" : idx === 7 ? "Jan" : idx === 8 ? "Feb" : idx === 9 ? "Mar" : idx === 10 ? "Apr" : idx === 11 ? "May" : "Jun"}</p>
                        <p className='font-normal text-off-gray text-center font-thicccboi-normal text-xs 2xl:text-sm'>
                            {idx >= 0 && idx < 7 ? "2021" : "2022"}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Chart;