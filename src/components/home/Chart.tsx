import React, { useRef } from 'react';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
    ChartData,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register the necessary Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const Chart: React.FC = () => {
    const chartRef = useRef<any>(null); // Initialize the ref for the chart

    // Define the chart data as a simple object
    const data: ChartData<'bar'> = {
        labels: [
            'Jun 2021', 'Jul 2021', 'Aug 2021', 'Sep 2021',
            'Oct 2021', 'Nov 2021', 'Dec 2021', 'Jan 2022',
            'Feb 2022', 'Mar 2022', 'Apr 2022', 'May 2022', 'Jun 2022'
        ],
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
                        return '#88FFBF'; // Default color in case of no chart area
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

    // Function to create a gradient for the "Revenue" bars
    const getGradient = (ctx: CanvasRenderingContext2D, chartArea: any) => {
        const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
        gradient.addColorStop(0, '#88FFBF');
        gradient.addColorStop(1, 'rgba(62, 254, 151, 0.12)');
        return gradient;
    };

    // Define chart options without specific typing
    const options: ChartOptions<'bar'> = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: false,
                ticks: {
                    display: true,
                },
                grid: {
                    display: false,
                },
                min: 1000,
                max: 30000,
            },
            x: {
                ticks: {
                    display: true,
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
        <div>
            <Bar data={data} options={options} ref={chartRef} />
        </div>
    );
};

export default Chart;
