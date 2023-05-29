import { Chart } from 'react-chartjs-2';
import 'chart.js/auto';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js';

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);


import './chart.css';


const data = {
    labels: ['Red',
        'Blue',
        'Yellow'],
    datasets: [
        {
            id: 1,
            label: 'Sales',
            data: [300, 150, 200],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        }
    ],
};

const options = {
    responsive: true,
    scales: {
        y: {
            beginAtZero: true
        }
    }
}

export const ChartComponent = () => {
    return <Chart type='pie' data={data} options={options}/>;
};

export const ChartComponentDoughnut = () => {
    return <Chart type='doughnut' data={data} />;
};



 export const ChartComponentPolarArea = () => {
        return <Chart type='radar' data={data} />;
 };

export const ChartComponentBar = () => {
    return <Chart type='bar' data={data} options={options}/>;
};
