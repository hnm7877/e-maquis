import Table from 'react-bootstrap/Table';

import 'bootstrap/dist/css/bootstrap.min.css';
import './table.css';

export const TableBilan = () => {
    return (

            <Table className="table-striped table-bordered table-hover table-responsive">
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
                <td scope="row">Soda</td>
                <td>coca</td>
                <td>200</td>
                <td>33 cl</td>
                <td>150 FCFA</td>
                <td>500 FCFA</td>
                <td> 3000 FCFA</td>
                </tr>

                <tr>
                    <td scope="row">Soda</td>
                    <td>coca</td>
                    <td>200</td>
                    <td>33 cl</td>
                    <td>150 FCFA</td>
                    <td>500 FCFA</td>
                    <td> 3000 FCFA</td>
                </tr>

                <tr>
                    <td scope="row">Soda</td>
                    <td>coca</td>
                    <td>200</td>
                    <td>33 cl</td>
                    <td>150 FCFA</td>
                    <td>500 FCFA</td>
                    <td> 3000 FCFA</td>
                </tr>

                </tbody>
            </Table>

    );
}