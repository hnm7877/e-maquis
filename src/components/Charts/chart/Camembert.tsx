import { Chart } from 'react-chartjs-2';
import { useProducts } from '../../../hooks/useProducts';
import { TEmployee } from '../../../api/employees';
import { useState } from 'react';
import { TCategorie } from '../../../api/ventes';

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
    if (arr.find((categorie) => categorie._id === acc.categorie._id)) {
      return arr;
    } else {
      return [...arr, acc.categorie];
    }
  }, [] as TCategorie[]);

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
          if (acc[product.employe._id].data[product.categorie.nom]) {
            acc[product.employe._id].data[product.categorie.nom] +=
              product.quantite;
          } else {
            acc[product.employe._id].data[product.categorie.nom] =
              product.quantite;
          }
        } else {
          acc[product.employe._id] = {
            label: product.employe.nom,
            data: {
              [product.categorie.nom]: product.quantite,
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
      if (acc[product.categorie.nom]) {
        acc[product.categorie.nom] += product.quantite;
      } else {
        acc[product.categorie.nom] = product.quantite;
      }
      return acc;
    }, {} as { [key: string]: number }) || {};

  const dataSets = [
    {
      id: 1,
      label: 'quantité',
      data: employeeSelectedId
        ? categories?.map(
            (cat) =>
              filterProductsByEmploye[employeeSelectedId].data[cat.nom] || 0
          )
        : categories?.map((cat) => categories_quantite[cat.nom] || 0),
      backgroundColor: categories?.map((cat) => cat.color),
      borderWidth: 2,
      borderColor: categories?.map((cat) => cat.color),
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
            labels: categories?.map((cat) => cat.nom) || [],
            datasets: dataSets,
          }}
          options={options}
        />
      </div>
    </div>
  );
};
