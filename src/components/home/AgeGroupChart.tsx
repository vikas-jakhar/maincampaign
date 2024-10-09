"use client"; // Ensure the component is rendered on the client side

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend, TooltipItem } from 'chart.js';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const AgeGroupChart: React.FC = () => {
    // Define the data
    const data = {
        labels: ['18-24', '25-34', '45-54', '65+'], // Age groups
        datasets: [
            {
                label: 'Percentage',
                data: [30, 50, 20, 40], // Example data for each age group
                backgroundColor: [
                    'rgba(75, 192, 192, 0.5)', // Light color for each bar
                    'rgba(255, 159, 64, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 99, 132, 0.5)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)', // Dark color for each bar
                    'rgba(255, 159, 64, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem: TooltipItem<'bar'>) => `${tooltipItem.dataset.label}: ${tooltipItem.raw}%`, // Format tooltip
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true, // Start y-axis at 0
                max: 100, // Maximum value on y-axis
                title: {
                    display: true,
                    text: 'Percentage (%)',
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Age Groups',
                },
            },
        },
    };

    return (
        <div className="h-60">
            <Bar data={data} options={options} />
        </div>
    );
};

export default AgeGroupChart;