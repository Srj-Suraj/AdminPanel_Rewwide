import React from 'react';
import {Line} from 'react-chartjs-2';
// note: not remove chart.js/auto
import {chart} from 'chart.js/auto';  

const data ={    
  labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets:[{
      label: 'Books',
      data: [12, 10, 13, 5, 15, 8, 14, 9, 6, 13, 11, 15,],
      backgroundColor: 'rgba(235, 144, 7,0.2)',
      borderColor: 'rgba(235, 144, 7)',
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





const RetailerChart =() => {
    return(
        <Line data={data} options={options} width={600}  height={210}  />
    )
}
export default RetailerChart;

