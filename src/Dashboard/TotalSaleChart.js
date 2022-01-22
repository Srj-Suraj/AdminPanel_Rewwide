import React from 'react';
import {Line} from 'react-chartjs-2';
// note: not remove chart.js/auto
import {chart} from 'chart.js/auto';  

const data ={    
  labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',],
  datasets:[{
      label: 'Top Sales Chart',
      data: [12, 10, 13, 12, 15, 8, ],
      backgroundColor: 'rgba(117, 197, 235, 0.2)',
      borderColor: 'rgba(117, 197, 235, 1)',
      borderWidth:2,
      pointRadius:5,
      pointBorderWidth:2,
      tension: 0.5,
      fill:true,

  }]
};

export const options = {
  responsive: false,
  maintainAspectRatio: false,
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
    xAxes: 
      {
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
        grid: {
          display: false,
        }
      },
   
    yAxes: 
        {
        stacked: true,
        display: true,
        ticks: {
            beginAtZero: false,
          },
        scaleLabel: {
          display: true,
          labelString: 'value',
          },
        grid: {
          display: false,
          }
      },
   
  },
  };





const TotalSaleChart =() => {
    return(
        <Line data={data} options={options} width={280}  height={210}  />
    )
}
export default TotalSaleChart;

