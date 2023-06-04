import { useState } from 'react';
import { useProducts } from '../../../hooks/useProducts';
import { helperDate } from '../../../helpers/helperDate';
import { Chart } from 'react-chartjs-2';
import { all } from 'axios';

const options = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export const ChartBar = () => {
  const { products } = useProducts();
  const [section, setSection] = useState('montant');

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

  const allCategories = products?.reduce((arr, acc) => {
    if (arr.find((categorie: any) => categorie._id === acc.categorie._id)) {
      return arr;
    } else {
      return [...arr, acc.categorie];
    }
  }, [] as any);

  const categories_quantite = keyOfFilterProductByDate?.map((date) => {
    return filterProductByDate[date].reduce((acc: any, product: any) => {
      if (acc[product.categorie.nom]) {
        acc[product.categorie.nom] += product.quantite;
      } else {
        acc[product.categorie.nom] = product.quantite;
      }
      return acc;
    }, {});
  });

  const categories_total_vente = keyOfFilterProductByDate?.map((date) => {
    return filterProductByDate[date].reduce((acc: any, product: any) => {
      if (acc[product.categorie.nom]) {
        acc[product.categorie.nom] += product.total_vente;
      } else {
        acc[product.categorie.nom] = product.total_vente;
      }
      return acc;
    }, {});
  });

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

  const categoriesDataLine = categories_total_vente?.reduce(
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
    datasets:
      section === 'quantite'
        ? Object.values(categoriesDataBar).map((categorie: any) => {
            return {
              type: 'bar' as const,
              label: categorie.label,
              data: categorie.data,
              borderWidth: 1,
              backgroundColor: [
                allCategories?.find((cat: any) => cat.nom === categorie.label)
                  .color,
              ],
            };
          })
        : Object.values(categoriesDataLine).map((categorie: any) => {
            return {
              type: 'line' as const,
              label: categorie.label,
              data: categorie.data,
              borderWidth: 1,
              backgroundColor: [
                allCategories?.find((cat: any) => cat.nom === categorie.label)
                  .color,
              ],
            };
          }),
  };
  return (
    <>
      <div className='chart__section-bar'>
        {['quantite', 'montant'].map((_section) => {
          return (
            <button
              className={`chart__section-bar__button ${
                _section === section ? 'chart__section-bar__button--active' : ''
              }`}
              onClick={() => setSection(_section)}
            >
              {_section}
            </button>
          );
        })}
      </div>
      <Chart type='bar' data={data} options={options} />
    </>
  );
};
