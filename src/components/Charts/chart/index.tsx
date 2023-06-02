import { Chart } from 'react-chartjs-2';
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
import { useProducts } from '../../../hooks/useProducts';
import { helperDate } from '../../../helpers/helperDate';

const data = {
  labels: ['January', 'February', 'March'],

  datasets: [
    {
      id: 1,
      label: 'Sales',
      data: [300, 150, 200],
      backgroundColor: [
        'rgba(255,99,132,0.53)',
        'rgba(54,162,235,0.42)',
        'rgba(255,205,86,0.45)',
      ],
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const dataHorizontal = {
  labels: ['January', 'February', 'March', 'April'],

  datasets: [
    {
      id: 1,
      label: 'Sales',
      data: [300, 150, 200, 950],
      backgroundColor: [
        'rgba(255,99,132,0.53)',
        'rgba(54,162,235,0.42)',
        'rgba(255,205,86,0.45)',
        'rgb(24,35,4)',
      ],
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
    {
      id: 2,
      label: 'Sales 2',
      data: [800, 550, 1000, 1500],
      backgroundColor: [
        'rgba(99,112,255,0.53)',
        'rgba(224,20,20,0.42)',
        'rgba(255,205,86,0.45)',
        'rgb(255,106,0)',
      ],
      borderColor: 'rgba(75, 192, 192, 1, 0.2)',
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

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

export const ChartComponent = () => {
  return <Chart type='pie' data={data} options={options} />;
};

export const ChartComponentDoughnut = () => {
  return <Chart type='doughnut' data={data} />;
};

export const ChartComponentPolarArea = () => {
  return <Chart type='radar' data={data} />;
};

export const ChartComponentBar = () => {
  const { products } = useProducts();

  const filterProductByDate = products?.reduce((acc: any, product: any) => {
    const date = helperDate(product.createdAt, 'MM/YYYY');

    if (acc[date]) {
      acc[date] = [...acc[date], product];
    } else {
      acc[date] = [product];
    }
    return acc;
  }, {});

  const keyOfFilterProductByDate = Object.keys(filterProductByDate || {});

  const categories_quantite = keyOfFilterProductByDate?.map((date) => {
    return filterProductByDate[date].reduce((acc: any, product: any) => {
      if (acc[product.categorie]) {
        acc[product.categorie] += product.quantite;
      } else {
        acc[product.categorie] = product.quantite;
      }
      return acc;
    }, {});
  });

  //   const categories_total_vente = keyOfFilterProductByDate?.map((date) => {
  //     return filterProductByDate[date].reduce((acc: any, product: any) => {
  //       if (acc[product.categorie]) {
  //         acc[product.categorie] += product.total_vente;
  //       } else {
  //         acc[product.categorie] = product.total_vente;
  //       }
  //       return acc;
  //     }, {});
  //   });

  const categoriesDataBar = categories_quantite?.reduce(
    (acc: any, categorie: any) => {
      const keyOfCategorie = Object.keys(categorie);

      keyOfCategorie.forEach((key) => {
        if (acc[key]) {
          acc[key] = {
            ...acc[key],
            data: [...acc[key].data, categorie[key]],
          };
        } else {
          acc[key] = {
            label: key,
            data: [categorie[key]],
          };
        }
      });

      return acc;
    },
    {}
  );

  const data = {
    labels: keyOfFilterProductByDate
      ?.map((date) =>
        helperDate(date.slice(0, 2) + '/01' + date.slice(2), 'MMM')
      )
      .reverse(),
    datasets: [
      ...Object.values(categoriesDataBar).map((categorie: any) => {
        return {
          type: 'bar' as const,
          label: categorie.label,
          data: categorie.data,
          borderWidth: 1,
          backgroundColor: categorie.data.map(() => {
            return `rgba(${Math.floor(Math.random() * 255)},${Math.floor(
              Math.random() * 255
            )},${Math.floor(Math.random() * 255)},0.5)`;
          }),
        };
      }),
       // ...Object.values(categoriesDataBar).map((categorie: any) => {
       //        return {
       //          type: 'line' as const,
       //          label: categorie.label,
       //          data: categorie.data,
       //          borderWidth: 1,
       //          backgroundColor: categorie.data.map(() => {
       //            return `rgba(${Math.floor(Math.random() * 255)},${Math.floor(
       //              Math.random() * 255
       //            )},${Math.floor(Math.random() * 255)},0.5)`;
       //          }),
       //        };
       //      }),
    ],
  };
  return <Chart type='bar' data={data} options={options} />;
};

export const ChartComponentBarHorizontal = () => {
  return <Chart type='bar' data={dataHorizontal} options={optionsHorizontal} />;
};

export const ChartComponentLine = () => {
  return <Chart type='line' data={dataHorizontal} options={optionsLine} />;
};
