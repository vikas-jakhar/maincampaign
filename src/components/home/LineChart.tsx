"use client"; // Ensure the component is rendered on the client side

import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Filler, Tooltip, Legend } from 'chart.js';

// Register the required components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Filler, Tooltip, Legend);

const LineChart: React.FC<{ lineColor: string; fillColor: string }> = ({ lineColor, fillColor }) => {
    const [chartData, setChartData] = useState({
        labels: Array.from({ length: 20 }, (_, i) => `Time ${i}`),
        datasets: [
            {
                label: 'Live Price Data',
                data: Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 1),
                fill: true,
                backgroundColor: fillColor, // Use the fill color passed in as a prop
                borderColor: lineColor, // Use the line color passed in as a prop
                borderWidth: 3,
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 10,
            },
        ],
    });

    useEffect(() => {
        let updateCount = 0; // Counter to track how many times data has been updated

        const fetchLiveData = async () => {
            const newDataPoint = Math.floor(Math.random() * 100) + 1; // Simulate live data

            setChartData(prevData => {
                const newLabels = [`Time ${prevData.labels.length}`, ...prevData.labels.slice(0, prevData.labels.length - 1)]; // Shift labels right
                const newData = [newDataPoint, ...prevData.datasets[0].data.slice(0, prevData.datasets[0].data.length - 1)]; // Shift data right

                return {
                    labels: newLabels,
                    datasets: [
                        {
                            ...prevData.datasets[0],
                            data: newData, // Replace dataset with shifted data
                        },
                    ],
                };
            });

            updateCount += 1; // Increment the counter
            if (updateCount >= 3) { // Stop after 50 updates
                clearInterval(interval); // Stop data updates
            }
        };

        const interval = setInterval(fetchLiveData, 700); // Update every 700ms

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    return (
        <div className='h-40 w-[150%] absolute -bottom-12 -left-5'>
            <Line
                data={chartData}
                options={{
                    animation: {
                        duration: 1000, // Animation when new data is added
                    },
                    elements: {
                        point: {
                            radius: 0, // Hide points
                        },
                    },
                    scales: {
                        x: {
                            display: false, // Hide x-axis
                            grid: {
                                display: false, // Hide x-axis grid lines
                            },
                        },
                        y: {
                            display: false, // Hide y-axis
                            grid: {
                                display: false, // Hide y-axis grid lines
                            },
                            min: Math.min(...chartData.datasets[0].data) - 100, // Small buffer for dynamic min
                            max: Math.max(...chartData.datasets[0].data) + 150, // Small buffer for dynamic max
                        },
                    },
                    plugins: {
                        tooltip: {
                            enabled: true, // Enable tooltips for data
                            callbacks: {
                                label: (tooltipItem) => `$${tooltipItem.raw}`, // Format tooltip to show dollar values
                            },
                        },
                        legend: {
                            display: false, // Hide the legend
                        },
                    },
                    maintainAspectRatio: false, // Allow chart to stretch to parent height/width
                    responsive: true, // Make the chart responsive
                }}
            />
        </div>
    );
};

export default LineChart;
