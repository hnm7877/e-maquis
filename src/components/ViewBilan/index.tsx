import { CardBilan } from '../CardBilan';
import { TableBilan } from '../TableBilan';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/bilan.min.css';
import './table.css';
import '../../assets/lib/font-awesome/css/font-awesome.css';
import '../../assets/lib/Ionicons/css/ionicons.css';

import { ChartBar, ChartPerformance, ChartCamembert } from '../Charts/chart';

export const ComponentBilan = () => {
  return (
    <main className='br-pagebody mg-t-5 pd-x-30'>
      <div>
        <div>
          <div className='pd-30 bilanTitle'>
            <h4 className='tx-gray-800 mg-b-5'>Bilan</h4>
            <p className='mg-b-0'></p>
          </div>

          <div className='col-lg-12 col-md-12 col-sm-12 bilanContent'>
            <div>
              <CardBilan />
            </div>

            <div className='mt-5 col-lg-12 bilanTable'>
              <TableBilan />
            </div>
            <div className='container'>
              <div className='row d-grid'>
                <div className='col-lg-12 col-md-12 col-sm-12 categories'>
                  <h4 className='tx-gray-800 mg-b-5'>Total par Catégories</h4>

                  <ChartBar />
                </div>
              </div>
            </div>

            <div className='row mg-t-20 camembertAndPerformance'>
              <div className='row d-flex flex-wrap '>
                <ChartCamembert />

                <ChartPerformance />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
