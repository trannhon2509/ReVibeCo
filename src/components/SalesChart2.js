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
      const productViews = products.map(product => product.views); // New data: views

      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: productNames,
          datasets: [{
            label: 'Views',
            data: productSales,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            yAxisID: 'sales', // Assign to 'sales' axis
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            },
            sales: {
              position: 'left', // Position 'sales' axis on the left
              title: {
                display: true,
                text: 'Units Sold',
              }
            },
            views: {
              position: 'right', // Position 'views' axis on the right
              title: {
                display: true,
                text: 'Views',
              },
              grid: {
                display: false // Hide grid lines for 'views' axis
              }
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
