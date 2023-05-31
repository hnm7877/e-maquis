import Table from 'react-bootstrap/Table';
import { useQuery } from 'react-query';
import { getVentesByDate } from '../../api/ventes';
import { useAppSelector } from '../../hooks/useRedux';

export const TableBilan = () => {
  const date = useAppSelector((s) => s.filters.date);
  const users = useAppSelector((s) => s.filters.users);

  const { data: products, isLoading } = useQuery(
    ['getVentesByDate', date, users],
    () => getVentesByDate({ date, users: users.map((user) => user._id) })
  );

  const total_ventes = products?.reduce((acc, product) => {
    return acc + product.total_vente;
  }, 0);

  const benefice = products?.reduce((acc, product) => {
    return acc + product.benefice;
  }, 0);

  const total_achat = products?.reduce((acc, product) => {
    return acc + product.prix_achat * product.quantite;
  }, 0);

  return (
    <Table
      className='table-striped
        table-bordered
        table-hover
        table-responsive'
      bordered={true}
     >
      <thead>
        <tr className='table-dark en_tete'>
          <th>Catégories</th>
          <th>Produits</th>
          <th>Quantités</th>
          <th>Taille</th>
          <th>Prix d'achat</th>
          <th>Prix de vente</th>
          <th>Vente totale</th>
          <th>Bénéfice</th>
        </tr>
      </thead>
      <tbody>
        {isLoading && (
          <tr>
            <td colSpan={8} rowSpan={4}>
              Chargement...
            </td>
          </tr>
        )}

        {!isLoading && !products?.length && (
          <tr>
            <td colSpan={8} rowSpan={4}>
              Aucun produit trouvé
            </td>
          </tr>
        )}

        {!isLoading && (
          <>
            {products?.map((product) => {
              return (
                <tr>
                  <td>{product.categorie}</td>
                  <td>{product.nom}</td>
                  <td>{product.quantite}</td>
                  <td>{product.taille}</td>
                  <td>{product.prix_achat}</td>
                  <td>{product.prix_vente}</td>
                  <td>{product.total_vente}</td>
                  <td>{product.benefice}</td>
                </tr>
              );
            })}
            {products && products?.length > 0 && (
              <tr>
                <td colSpan={5} />
                <td>Total Prix d'achat: {total_achat} FCFA</td>
                <td>Total Vente totale: {total_ventes}FCFA</td>
                <td>Total Bénéfice: {benefice} FCFA</td>
              </tr>
            )}
          </>
        )}
      </tbody>
    </Table>
  );
};

