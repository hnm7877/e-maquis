import { Chart } from 'react-chartjs-2';
import { useProducts } from '../../../hooks/useProducts';
import { TEmployee } from '../../../api/employees';
import { useState } from 'react';

const options = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export const ChartCamembert = () => {
  const { products } = useProducts();
  const [employeeSelectedId, setEmployeeSelectedId] = useState<string | null>(
    null
  );

  const categories = products?.reduce((arr, acc) => {
    if (arr.includes(acc.categorie)) {
      return arr;
    } else {
      return [...arr, acc.categorie];
    }
  }, [] as string[]);

  const employes: TEmployee[] =
    products?.reduce((arr, acc) => {
      if (arr.find((employe: TEmployee) => employe._id === acc.employe._id)) {
        return arr;
      } else {
        return [...arr, acc.employe];
      }
    }, [] as any[]) || [];

  const filterProductsByEmploye =
    products?.reduce(
      (acc, product) => {
        if (acc[product.employe._id]) {
          if (acc[product.employe._id].data[product.categorie]) {
            acc[product.employe._id].data[product.categorie] +=
              product.quantite;
          } else {
            acc[product.employe._id].data[product.categorie] = product.quantite;
          }
        } else {
          acc[product.employe._id] = {
            label: product.employe.nom,
            data: {
              [product.categorie]: product.quantite,
            },
          };
        }
        return acc;
      },
      {} as {
        [key: string]: {
          label: string;
          data: {
            [key: string]: number;
          };
        };
      }
    ) || {};

  const categories_quantite =
    products?.reduce((acc, product) => {
      if (acc[product.categorie]) {
        acc[product.categorie] += product.quantite;
      } else {
        acc[product.categorie] = product.quantite;
      }
      return acc;
    }, {} as { [key: string]: number }) || {};

  const dataSets = [
    {
      id: 1,
      label: 'Sales',
      data: employeeSelectedId
        ? categories?.map(
            (cat) => filterProductsByEmploye[employeeSelectedId].data[cat] || 0
          )
        : categories?.map((cat) => categories_quantite[cat] || 0),
      backgroundColor: [
        'rgba(255,99,132,0.53)',
        'rgba(54,162,235,0.42)',
        'rgba(255,205,86,0.45)',
      ],
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ];

  return (
    <div className='col-lg-6 col-md-6 col-sm-12 mb-3'>
      <div className='chart-camembert__employees'>
        <h4 className='tx-gray-800 mg-b-5'>employés</h4>
        <div className='d-flex gap-2'>
          {employes?.map((employe) => {
            return (
              <button
                className={`chart-camembert__employee  ${
                  employe._id === employeeSelectedId
                    ? 'chart-camembert__employee--active'
                    : ''
                }`}
                onClick={() =>
                  setEmployeeSelectedId((_prevId) =>
                    _prevId === employe._id ? null : employe._id
                  )
                }
              >
                {employe.nom}
              </button>
            );
          })}
        </div>
      </div>
      <div className='card_doughnut'>
        <Chart
          type='pie'
          data={{
            labels: categories || [],
            datasets: dataSets,
          }}
          options={options}
        />
      </div>
    </div>
  );
};
