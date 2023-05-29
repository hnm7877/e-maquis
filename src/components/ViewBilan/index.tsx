
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/bilan.min.css';
import './table.css';
import {ChartComponent, ChartComponentDoughnut} from "../Charts/bar";
import {CardBilan} from "../CardBilan";
import {TableBilan} from "../TableBilan";


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
                  <TableBilan/>

                  <div className="row mg-t-20 ">
                      <div className= "col-lg-12 d-flex  align-content-center">

                          <div className="col-lg-7 col-md-12 col-sm-12 card_doughnut">

                              <ChartComponentDoughnut />

                          </div>
                          <div className="col-lg-7 col-md-12 col-sm-12 card_doughnut">

                              <ChartComponent/>

                          </div>

                      </div>

                  </div>

              </div>

          </div>
        </div>






      </main>
    );
};
