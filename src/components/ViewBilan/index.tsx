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
                  <ChartBar />
                </div>
              </div>
            </div>

            <div className='row mg-t-20'>
              <div className='col-lg-12 col-md-12 col-sm-12 d-flex align-content-around'>
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
