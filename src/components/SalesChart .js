import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { useAppContext } from '../context/AppContext'; // Adjust import path as per your project structure

const SalesChart = () => {
  const { products } = useAppContext();
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // To keep track of the Chart.js instance

  useEffect(() => {
    if (chartRef && chartRef.current) {
      // Clean up previous chart instance if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');

      // Extract data from products to prepare for the chart
      const productNames = products.map(product => product.name);
      const productSales = products.map(product => product.sold);

      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: productNames,
          datasets: [{
            label: 'Units Sold',
            data: productSales,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }

    // Clean up the chart instance on component unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [products]);

  return <canvas ref={chartRef} style={{ maxWidth: '100%' }}></canvas>;
};

export default SalesChart;
