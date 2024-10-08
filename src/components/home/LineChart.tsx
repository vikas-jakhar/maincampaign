"use client"; // Ensure the component is rendered on the client side

import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Filler, Tooltip, Legend } from 'chart.js';

// Register the required components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Filler, Tooltip, Legend);

const LineChart: React.FC = () => {
    const [chartData, setChartData] = useState({
        labels: Array.from({ length: 20 }, (_, i) => `Time ${i}`), // Create initial labels
        datasets: [
            {
                label: 'FPS Meter',
                data: Array.from({ length: 20 }, () => Math.floor(Math.random() * 60) + 1), // Initial random data points
                fill: true, // Enable filling under the line
                backgroundColor: 'rgba(144, 238, 144, 0.5)', // Light green fill color
                borderColor: 'rgba(75, 192, 192, 1)', // Line color
                borderWidth: 2, // Increase line width for better visibility
                tension: 0.4, // Smooth lines
                pointRadius: 0, // Remove dots on the line
                pointHitRadius: 0, // Remove hit radius for points
            },
        ],
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setChartData(prevData => {
                // Remove the oldest label and data point, and add new ones
                const newLabel = `Time ${prevData.labels.length}`;
                const newDataPoint = Math.floor(Math.random() * 60) + 1; // Simulate FPS values between 1 and 60

                return {
                    labels: [...prevData.labels.slice(1), newLabel], // Shift labels left
                    datasets: [
                        {
                            ...prevData.datasets[0],
                            data: [...prevData.datasets[0].data.slice(1), newDataPoint], // Shift data left
                        },
                    ],
                };
            });
        }, 1000); // Update every second

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    return (
        <div style={{ height: '40px' }}>
            <Line
                data={chartData}
                options={{
                    animation: {
                        duration: 500, // Duration for the overall animation of the dataset changes
                    },
                    elements: {
                        point: {
                            radius: 0, // Set point radius to 0 to remove dots
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
                        },
                    },
                    plugins: {
                        tooltip: {
                            enabled: false, // Disable tooltips
                        },
                        legend: {
                            display: false, // Hide the legend
                        },
                    },
                    maintainAspectRatio: false, // Prevent maintaining aspect ratio to allow custom height
                }}
                height={40} // Set height to 40 pixels
            />
        </div>
    );
};

export default LineChart;
