import Table from "react-bootstrap/Table";


import {DataFaker} from '../../assets/js/dataFaker.js';

console.log('index Table: ', DataFaker);

export const TableBilan = () => {
    return (
        <Table className="table-striped table-bordered table-hover table-responsive">
            <thead>
            <tr>
                <th>Catégories</th>
                <th>Produits</th>
                <th>Quantités</th>
                <th>Taille</th>
                <th>Prix d'achat</th>
                <th>Vente totale</th>
                <th>Bénéfice</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Soda</td>
                <td>coca</td>
                <td>200</td>
                <td>33 cl</td>
                <td>150 FCFA</td>
                <td>500 FCFA</td>
                <td>3000 FCFA</td>
            </tr>
            <tr>
                <td>Soda</td>
                <td>coca</td>
                <td>200</td>
                <td>33 cl</td>
                <td>150 FCFA</td>
                <td>500 FCFA</td>
                <td>3000 FCFA</td>
            </tr>
            <tr>
                <td colSpan='4' />
                <td>Total Prix d'achat:  FCFA</td>
                <td>Total Vente totale:  FCFA</td>
                <td>Total Bénéfice:  FCFA</td>
            </tr>
            </tbody>
        </Table>
    )
}