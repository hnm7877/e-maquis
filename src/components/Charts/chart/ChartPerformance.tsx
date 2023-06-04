import { Chart } from 'react-chartjs-2';
import { useProducts } from '../../../hooks/useProducts';

export const ChartPerformance = () => {
  const { products } = useProducts();

  const categories = products?.reduce((arr, acc) => {
    if (arr.includes(acc.categorie)) {
      return arr;
    } else {
      return [...arr, acc.categorie];
    }
  }, [] as string[]);

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

  return (
    <div className='col-lg-6 col-md-6 col-sm-12'>
      <div className='card_doughnut'>
        <h4 className='tx-gray-800 mg-b-5'>Performance employés</h4>
        <Chart
          type='radar'
          data={{
            labels: Object.values(filterProductsByEmploye).map(
              (employe) => employe.label
            ),
            datasets:
              categories?.map((cat) => ({
                label: cat,
                data: Object.values(filterProductsByEmploye).map(
                  (employe) => employe.data[cat] || 0
                ),
              })) || [],
          }}
        />
      </div>
    </div>
  );
};
