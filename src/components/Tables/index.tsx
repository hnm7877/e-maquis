import './table.css';
import Table from 'react-bootstrap/Table';

export const TableBilan = () => {
    return (

            <Table className="striped bordered hover">
                <thead>
                <tr>
                    <th scope="col">Catégories</th>
                    <th scope="col">Produits</th>
                    <th scope="col">Quantités</th>
                    <th scope="col">Taille</th>
                    <th scope="col">Prix d'achat</th>
                    <th scope="col">Vente total</th>
                    <th scope="col">Total Bénéfice</th>

                </tr>
                </thead>

                <tbody>
                <tr>
                <td scope="row">Catégorie</td>
                <td>Produit</td>
                <td>Quantité</td>
                <td>Taille</td>
                <td>prix d'achat FCFA</td>
                <td>prix de vente FCFA</td>
                <td> FCFA</td>
                </tr>

                </tbody>
            </Table>

    );
}