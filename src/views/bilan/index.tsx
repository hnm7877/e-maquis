import { Filters } from './Filters';
import { TableBilan } from '../../components/Tables';

import './bilan.css';

export const Bilan = () => {
  return (
    <div className='bilan'>
      <Filters />
      <div className='bilan-content'>
      <TableBilan />
      </div>
    </div>
  );
};
