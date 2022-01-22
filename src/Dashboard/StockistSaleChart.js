import React from 'react';
import {Bar} from 'react-chartjs-2';
// note: not remove chart.js/auto
import {chart} from 'chart.js/auto';  

const data ={    
  labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
  datasets:[{
      label: 'Stockies Sales',
      data: [12, 6, 3, 15, 5, 8,6, 3, 15, 5, 8,17],
      backgroundColor: [
        'rgba(255, 99, 132)',
        'rgba(255, 159, 64)',
        'rgba(255, 205, 86)',
        'rgba(75, 192, 192)',
        'rgba(54, 162, 235)',
        'rgba(153, 102, 255)',
        'rgba(201, 203, 207)'
      ],
      barThickness:20,
  }]
};

export const options = {
    responsive: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Monthly wise Sales (in %) ',
        position: 'bottom',
      },
    },
    scales: {

      x: {
        stacked: true,
        grid: {
          display: false,
        }
      },
  
      y: {
        stacked: true,
        grid: {
          display: false,
        }
      },
    },
  };





const StockistSaleChart =() => {
    return(
        <Bar data={data} options={options} width={600}  height={210} />
    )
}
export default StockistSaleChart;

