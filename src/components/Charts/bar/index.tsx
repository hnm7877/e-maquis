import { Bar } from 'react-chartjs-2';

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
        {
            label: 'Sales',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        },
    ],
};

const ChartComponent = () => {
    return <Bar data={data} />;
};

export const ChartComponentBar = () => {
    return (
        <div>
            <h1>Chart Example</h1>
            <ChartComponent />
        </div>
    );
};

