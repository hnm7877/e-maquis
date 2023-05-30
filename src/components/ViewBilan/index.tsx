
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/bilan.min.css';
import './table.css';
import {
    ChartComponent,
    ChartComponentBar,
    ChartComponentBarHorizontal,
    ChartComponentDoughnut, ChartComponentLine,
    ChartComponentPolarArea
} from "../Charts/chart";
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
                  <div>
                      <CardBilan/>
                  </div>

                  <div className="mt-5">
                      <TableBilan />
                  </div>
                  <div className="container d-flex justify-content-around col-lg-12">
                      <div className="col-5">
                          <ChartComponentBar />
                      </div>
                      <div className="col-5">
                          <ChartComponentBar />
                      </div>
                  </div>


                  <div className="row mg-t-20 col-lg-12 col-md-7 col-sm-7">
                      <div className= "col-lg-12 d-flex  align-content-around ">

                          <div className="col-lg-4 col-md-12 col-sm-12 card_doughnut mr-3">

                              <ChartComponentDoughnut />

                          </div>
                          <div className="col-lg-4 col-md-12 col-sm-12 card_doughnut mr-3">

                              <ChartComponent/>

                          </div>

                          <div className="col-lg-4 col-md-12 col-sm-12 card_doughnut">
                              <h4 className="tx-gray-800 mg-b-5">Performance employés</h4>

                              <ChartComponentPolarArea/>

                          </div>

                      </div>

                  </div>

                  <div className="row mg-t-20 col-lg-12 col-md-7 col-sm-7">
                      <div className= "col-lg-12 d-flex  align-content-around ">

                          <div className="col-lg-4 col-md-12 col-sm-12 card_doughnut mr-3">

                              <ChartComponentBarHorizontal />

                          </div>

                          <div className="col-lg-8 col-md-12 col-sm-12 card_doughnut ml-3">

                              <ChartComponentLine/>
                          </div>


                      </div>

                  </div>

              </div>

          </div>
        </div>

      </main>
    );
};
