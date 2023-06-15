import { Chart } from 'react-chartjs-2';
import { useProducts } from '../../../hooks/useProducts';
import { TCategorie } from '../../../api/ventes';

export const ChartPerformance = () => {
  const { products } = useProducts();

  const categories = products?.reduce((arr, acc) => {
    if (arr.find((_cat) => _cat._id === acc.categorie._id)) {
      return arr;
    } else {
      return [...arr, acc.categorie];
    }
  }, [] as TCategorie[]);

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

  return (
    <div className='col-lg-6 col-md-6 col-sm-12 performance'>
      <h4 className='tx-gray-800 mg-b-5'>Performance</h4>
      <div className='card_doughnut'>
        <Chart
          type='radar'
          data={{
            labels: Object.values(filterProductsByEmploye).map(
              (employe) => employe.label
            ),
            datasets:
              categories?.map((cat) => ({
                label: cat.nom,
                data: Object.values(filterProductsByEmploye).map(
                  (employe) => employe.data[cat.nom] || 0
                ),
                backgroundColor: [cat.color],
                borderWidth: 2,
                borderColor: cat.color,
              })) || [],
          }}
        />
      </div>
    </div>
  );
};
