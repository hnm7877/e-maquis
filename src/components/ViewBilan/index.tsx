import {
  ChartComponent,
  ChartComponentBar,
  ChartComponentBarHorizontal,
  ChartComponentDoughnut,
  ChartComponentLine,
  ChartComponentPolarArea,
} from '../Charts/chart';
import { CardBilan } from '../CardBilan';
import { TableBilan } from '../TableBilan';
import { CardDetail } from '../CardBilan/CardDetail.tsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/bilan.min.css';
import './table.css';
import '../../assets/lib/font-awesome/css/font-awesome.css';
import '../../assets/lib/Ionicons/css/ionicons.css';
import '../../assets/lib/perfect-scrollbar/css/perfect-scrollbar.css';
import '../../assets/lib/jquery-switchbutton/jquery.switchButton.css';
import '../../assets/lib/rickshaw/rickshaw.min.css';

import '../../assets/js/cardDetail.js';

export const ComponentBilan = () => {
  return (
    <main>
      <div>
        <div>
          <div className='pd-30'>
            <h4 className='tx-gray-800 mg-b-5'>Bilan</h4>
            <p className='mg-b-0'></p>
          </div>

          <div className='br-pagebody mg-t-5 pd-x-30'>
            <div>
              <CardBilan />
            </div>

            <div className='mt-5'>
              <TableBilan />
            </div>
            <div className='container'>
              <div className='row justify-content-around'>
                <div className='col-lg-12 col-md-6 col-sm-12'>
                  <h2>Category product for price </h2>
                  <ChartComponentBar />
                </div>
              </div>
            </div>

            <div className='row mg-t-20'>
              <div className='col-lg-12 col-md-12 col-sm-12 d-flex align-content-around'>
                <div className='col-lg-4 col-md-6 col-sm-12 mb-3'>
                  <div className='card_doughnut'>
                    <ChartComponentDoughnut />
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 mb-3'>
                  <div className='card_doughnut'>
                    <ChartComponent />
                  </div>
                </div>
                <div className='col-lg-4 col-md-12 col-sm-12'>
                  <div className='card_doughnut'>
                    <h4 className='tx-gray-800 mg-b-5'>Performance employés</h4>
                    <ChartComponentPolarArea />
                  </div>
                </div>
              </div>
            </div>

            <div className='row mg-t-20'>
              <div className='col-lg-12 col-md-12 col-sm-12'>
                <div className='row d-flex align-items-center'>
                  <div className='col-lg-4 col-md-12 col-sm-12 mb-3'>
                    <div className='card_doughnut'>
                      <ChartComponentBarHorizontal />
                    </div>
                  </div>
                  <div className='col-lg-8 col-md-12 col-sm-12'>
                    <div className='card_doughnut'>
                      <ChartComponentLine />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-lg-12 col-md-12 col-sm-12 justify-content-around'>
          <CardDetail />
        </div>
      </div>
    </main>
  );
};
