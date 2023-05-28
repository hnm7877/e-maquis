import { Filters } from './Filters';
import {ComponentBilan} from '../../components/Tables';

import './bilan.css';

export const Bilan = () => {
  return (
    <div className='bilan'>
      <Filters />
      <div className='bilan-content'>
      <ComponentBilan />
      </div>
    </div>
  );
};
