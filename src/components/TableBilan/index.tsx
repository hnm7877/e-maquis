import { Table } from 'react-bootstrap';
import { TablePagination } from './TablePagination';
import { useState } from 'react';
import './tableBilan.css';
import { useProducts } from '../../hooks/useProducts';
import { useAppSelector } from '../../hooks/useRedux';

export const TableBilan = () => {
  const { products, isLoading } = useProducts();

  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
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

  const nbPages = allProducts
    ? Math.ceil(allProducts?.length / rowsPerPage)
    : 0;

  const total_ventes = allProducts?.reduce((acc, product) => {
    return acc + product.total_vente;
  }, 0);

  const benefice = allProducts?.reduce((acc, product) => {
    return acc + product.benefice;
  }, 0);

  const total_achat = allProducts?.reduce((acc, product) => {
    return acc + product.prix_achat * product.quantite;
  }, 0);

  const productsPaginated = allProducts?.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <>
      <div className='table-bilan'>
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
                {productsPaginated?.map((product) => {
                  return (
                    <tr>
                      <td>{product.categorie.nom}</td>
                      <td>{product.nom}</td>
                      <td>{product.quantite}</td>
                      <td>{product.taille}</td>
                      <td>{product.prix_achat} FCFA</td>
                      <td>{product.prix_vente} FCFA</td>
                      <td>{product.total_vente} FCFA</td>
                      <td>{product.benefice} FCFA</td>
                    </tr>
                  );
                })}
              </>
            )}
          </tbody>
          <tfoot>
            {!isLoading && (
              <>
                {products && products?.length > 0 && (
                  <tr className='table-dark'>
                    <th colSpan={5} />
                    <th>Total Prix d'achat: {total_achat} FCFA</th>
                    <th>Total Vente totale: {total_ventes}FCFA</th>
                    <th>Total Bénéfice: {benefice} FCFA</th>
                  </tr>
                )}
              </>
            )}
          </tfoot>
        </Table>
      </div>

      {products && allProducts?.length > 0 && (
        <TablePagination
          nbPages={nbPages}
          page={page}
          setPage={setPage}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          total={allProducts?.length}
        />
      )}
    </>
  );
};
