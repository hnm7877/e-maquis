import './card.css';
import { useProducts } from '../../hooks/useProducts';
import { useAppSelector } from '../../hooks/useRedux';
import CountUp from 'react-countup';

import { COLORS_TEMPLATE } from '../../../constants';

console.log(COLORS_TEMPLATE);

export const CardBilan = () => {
  const { products } = useProducts();

  const search = useAppSelector((s) => s.filters.search);

  const allProducts =
    (search
      ? products?.filter((product) => {
          return (
            product.nom.toLowerCase().includes(search.toLowerCase()) ||
            product.categorie.nom
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            product.taille.toLowerCase().includes(search.toLowerCase())
          );
        })
      : products) || [];

  const total_ventes = allProducts?.reduce((acc, product) => {
    return acc + product.total_vente;
  }, 0);

  const benefice = allProducts?.reduce((acc, product) => {
    return acc + product.benefice;
  }, 0);

  const total_achat = allProducts?.reduce((acc, product) => {
    return acc + product.prix_achat * product.quantite;
  }, 0);

  const total_quantity = allProducts?.reduce((acc, product) => {
    return acc + product.quantite;
  }, 0);

  const TABS = [
    {
      label: 'Total achat',
      value: total_achat,
      color: COLORS_TEMPLATE[1],
      icon: 'ion-bag',
    },
    {
      label: 'Total vente',
      value: total_ventes,
      color: COLORS_TEMPLATE[2],
      icon: 'ion-ios-cart',
    },
    {
      label: 'Bénéfice',
      value: benefice,
      color: COLORS_TEMPLATE[3],
      icon: 'ion-cash',
    },
    {
      label: 'Nombre de bouteilles',
      value: total_quantity,
      color: COLORS_TEMPLATE[4],
      isQuantity: true,
      icon: 'ion-ios-pint',
    },
  ];

  return (
    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-xl-4'>
      {TABS.map((tab, index) => {
        return (
          <div className='col' key={index}>
            <div
              style={{
                backgroundColor: tab.color,
              }}
              className='rounded overflow-hidden'
            >
              <div className='pd-25 d-flex align-items-center'>
                <i className={`ion ${tab.icon} tx-60 lh-0 tx-white op-7'`}></i>
                <div className='mg-l-20'>
                  <p className='tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase tx-white-8 mg-b-10'>
                    {tab.label}
                  </p>
                  <p className='tx-24 tx-white tx-lato tx-bold mg-b-2 lh-1'>
                    <CountUp
                      end={tab.value}
                      separator='.'
                      suffix={tab.isQuantity ? '' : ' FCFA'}
                    />
                  </p>
                  <span className='tx-11 tx-roboto tx-white-6'></span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
