import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/bilan.min.css';
import './table.css';
import {ChartComponentBar} from "../Charts/bar";
import {CardBilan} from "../CardBilan";


export const ComponentBilan = () => {
    return (
      <main >
        <div >

          <div >
              <div className="pd-30">
                  <h4 className="tx-gray-800 mg-b-5">Bilan</h4>
                  <p className="mg-b-0"></p>
              </div>

              <div className="br-pagebody mg-t-5 pd-x-30">
                  <CardBilan/>

                  <div className="row mg-t-20 ">
                      <div className= "col-lg-12 d-flex  align-content-center">


                          <div className="col-lg-7 col-md-12 col-sm-12">

                            <ChartComponentBar/>

                          </div>

                      </div>

                  </div>

              </div>

          </div>
        </div>




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

      </main>
    );
};
