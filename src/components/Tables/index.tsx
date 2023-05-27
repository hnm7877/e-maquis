import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/bilan.min.css';
import './table.css';

export const TableBilan = () => {
    return (
      <main >
        <div >

          <div >
              <div className="pd-30">
                  <h4 className="tx-gray-800 mg-b-5">Bilan</h4>
                  <p className="mg-b-0"></p>
              </div>

              <div className="br-pagebody mg-t-5 pd-x-30">
                  <div className="row row-sm col-sm-12 col-md-12 col-xl-12">
                      <div className="col-sm-6 col-xl-3">
                          <div className="bg-teal rounded overflow-hidden">
                              <div className="pd-25 d-flex align-items-center">
                                  <i className="ion ion-earth tx-60 lh-0 tx-white op-7"></i>
                                  <div className="mg-l-20">
                                      <p className="tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase tx-white-8 mg-b-10">Today's
                                          Visits</p>
                                      <p className="tx-24 tx-white tx-lato tx-bold mg-b-2 lh-1">1,975,224</p>
                                      <span className="tx-11 tx-roboto tx-white-6">24% higher yesterday</span>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="col-sm-6 col-xl-3 mg-t-20 mg-sm-t-0">
                          <div className="bg-danger rounded overflow-hidden">
                              <div className="pd-25 d-flex align-items-center">
                                  <i className="ion ion-bag tx-60 lh-0 tx-white op-7"></i>
                                  <div className="mg-l-20">
                                      <p className="tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase tx-white-8 mg-b-10">Today
                                          Sales</p>
                                      <p className="tx-24 tx-white tx-lato tx-bold mg-b-2 lh-1">$329,291</p>
                                      <span className="tx-11 tx-roboto tx-white-6">$390,212 before tax</span>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="col-sm-6 col-xl-3 mg-t-20 mg-xl-t-0">
                          <div className="bg-primary rounded overflow-hidden">
                              <div className="pd-25 d-flex align-items-center">
                                  <i className="ion ion-monitor tx-60 lh-0 tx-white op-7"></i>
                                  <div className="mg-l-20">
                                      <p className="tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase tx-white-8 mg-b-10">%
                                          Unique Visits</p>
                                      <p className="tx-24 tx-white tx-lato tx-bold mg-b-2 lh-1">54.45%</p>
                                      <span className="tx-11 tx-roboto tx-white-6">23% average duration</span>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="col-sm-6 col-xl-3 mg-t-20 mg-xl-t-0">
                          <div className="bg-br-primary rounded overflow-hidden">
                              <div className="pd-25 d-flex align-items-center">
                                  <i className="ion ion-clock tx-60 lh-0 tx-white op-7"></i>
                                  <div className="mg-l-20">
                                      <p className="tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase tx-white-8 mg-b-10">Bounce
                                          Rate</p>
                                      <p className="tx-24 tx-white tx-lato tx-bold mg-b-2 lh-1">32.16%</p>
                                      <span className="tx-11 tx-roboto tx-white-6">65.45% on average time</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="row row-sm mg-t-20">
                      <div className="col-8">

                          <div className="card pd-0 bd-0 shadow-base">
                              <div className="pd-x-30 pd-t-30 pd-b-15">
                                  <div className="d-flex align-items-center justify-content-between">
                                      <div>
                                          <h6 className="tx-13 tx-uppercase tx-inverse tx-semibold tx-spacing-1">Network
                                              Performance</h6>
                                          <p className="mg-b-0">Duis autem vel eum iriure dolor in hendrerit in
                                              vulputate...</p>
                                      </div>
                                      <div className="tx-13">
                                          <p className="mg-b-0"><span
                                              className="square-8 rounded-circle bg-purple mg-r-10"></span> TCP Reset
                                              Packets</p>
                                          <p className="mg-b-0"><span
                                              className="square-8 rounded-circle bg-pink mg-r-10"></span> TCP FIN
                                              Packets</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="pd-x-15 pd-b-15">
                                  <div id="ch1" className="br-chartist br-chartist-2 ht-200 ht-sm-300"></div>
                              </div>
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
