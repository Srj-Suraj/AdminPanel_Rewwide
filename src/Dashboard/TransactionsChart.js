import React from 'react';
import {Pie  } from 'react-chartjs-2';
// note: not remove chart.js/auto
import {chart} from 'chart.js/auto';  


export const options = {
    responsive: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        align:'center',
      },
      title: {
        display: true,
        text: 'Monthly Status (in %) ',
        position: 'bottom',
      },
    },
  };


const data ={    
    labels:['Complete', 'Pending', 'Declien', ],
    datasets:[{
        label: 'Top Clients',
        data: [12, 9, 8, ],
        backgroundColor: [
          'rgba(64, 84, 184)',
          'rgba(155, 31, 222)',
          'rgba(226, 11, 230)',
        
        ],
    }]
};


const TransactionsChart =() => {
    return(
        <Pie   
        data={data} 
        options={options}
        height={210}
        width={300}
        />
    )
}
export default TransactionsChart;

