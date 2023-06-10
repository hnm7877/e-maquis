import 'chart.js/auto';
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
} from 'chart.js';

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);

import './chart.css';

// eslint-disable-next-line react-refresh/only-export-components
export const optionsHorizontal = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
};

export const optionsLine = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

export * from './Bar';
export * from './Camembert';
export * from './ChartPerformance';
