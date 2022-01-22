import React from 'react';
import {Doughnut  } from 'react-chartjs-2';
// note: not remove chart.js/auto
import {chart} from 'chart.js/auto';  


export const options = {
    responsive: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        align:'start',
      },
      title: {
        display: true,
        text: 'Monthly Status (in %) ',
        position: 'bottom',
      },
    },
  };


const data ={    
    labels:['Active', 'Pending', 'Inactive', ],
    datasets:[{
        label: 'Top Clients',
        data: [12, 9, 3, ],
        backgroundColor: [
          'rgba(255, 99, 132)',
          'rgba(255, 159, 64)',
          'rgba(255, 205, 86)',
        
        ],
    }]
};


const TopClientChart =() => {
    return(
        <Doughnut   
        data={data} 
        options={options}
        height={210}
        width={300}
        />
    )
}
export default TopClientChart;

