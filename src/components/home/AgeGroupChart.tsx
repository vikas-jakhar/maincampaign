"use client";
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend, Title } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, Title);

interface AgeGroupChartProps {
    ageData: number[];
}

const AgeGroupChart: React.FC<AgeGroupChartProps> = ({ ageData }) => {
    const data = {
        labels: ['18-24', '25-34', '45-54', '65+'],
        datasets: [
            {
                label: 'Percentage',
                data: ageData,
                backgroundColor: '#3B5998',
                borderColor: '#FAF9F6',
                borderWidth: 0,
                barThickness: 19,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Age Group',
                font: {
                    size: 10,
                },
                padding: {
                    top: 10,
                },
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem: any) => `${tooltipItem.dataset.label}: ${tooltipItem.raw}%`,
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                min: 0,
                max: 100,
                ticks: {
                    stepSize: 20,
                    callback: (value: any) => value === 0 ? '' : `${value}%`,
                    autoSkip: false,
                },
                grid: {
                    display: false,
                },
            },
            x: {
                title: {
                    display: false,
                    text: 'Age Groups',
                },
                grid: {
                    display: false,
                },
            },
        },
    };

    return (
        <div className="h-48">
            <Bar data={data} options={options} />
        </div>
    );
};

export default AgeGroupChart;
