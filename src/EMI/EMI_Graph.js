import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {Pie} from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



const EMI_Graph =(props)=>{
    const data = {
        labels: [ 'Pricipal', 'Interest'],
        datasets: [
          {
            label: '---',
            data: [props.principal, props.amount - props.principal ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

   
    return(
        <>
        <h4>Graph</h4>
        <Pie data={data}/>
        </>
    )
}
export default EMI_Graph;