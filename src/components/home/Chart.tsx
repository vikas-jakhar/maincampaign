import React from 'react';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    ChartOptions // Import the ChartOptions type
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register the necessary Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const Chart: React.FC = () => {
    // Define the chart data
    const data = {
        labels: [
            'Jun 2021', 'Jul 2021', 'Aug 2021', 'Sep 2021',
            'Oct 2021', 'Nov 2021', 'Dec 2021', 'Jan 2022',
            'Feb 2022', 'Mar 2022', 'Apr 2022', 'May 2022', 'Jun 2022'
        ],
        datasets: [
            {
                label: 'Series 1', // Dark blue bars
                data: [20, 25, 15, 22, 18, 24, 21, 27, 23, 17, 24, 28, 26], // Example data
                backgroundColor: 'rgba(0, 80, 160, 0.9)', // Dark blue
                borderWidth: 1
            },
            {
                label: 'Series 2', // Light green bars
                data: [18, 14, 20, 23, 24, 20, 15, 18, 21, 14, 22, 25, 28], // Example data
                backgroundColor: 'rgba(144, 238, 144, 0.8)', // Light green
                borderWidth: 1
            }
        ]
    };

    // Explicitly define the type for chart options
    const options: ChartOptions<'bar'> = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 5 // Adjust based on the data range
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Monthly Data from Jun 2021 to Jun 2022'
            },
            legend: {
                display: true,
                position: 'top' // You can change this to 'left', 'right', or 'bottom'
            }
        }
    };

    return (
        <div>
            <Bar data={data} options={options} />
        </div>
    );
};

export default Chart;