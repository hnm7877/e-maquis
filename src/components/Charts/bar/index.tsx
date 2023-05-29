import { Pie, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import './bar.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Red',
        'Blue',
        'Yellow'],
    datasets: [
        {
            id: 1,
            label: 'Sales',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        },
    ],
};

export const ChartComponent = () => {
    return <Pie data={data} />;
};

export const ChartComponentDoughnut = () => {
    return <Doughnut data={data} />;
};








