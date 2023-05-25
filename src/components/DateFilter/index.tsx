import './dateFilter.css';
import './customCalendar.css';
// import Fr from 'date-fns/locale/fr';
import 'react-datepicker/dist/react-datepicker.css';
import { DateAndHour } from './DateAndHour';
import { useState } from 'react';
import { CalendarIcon } from '../../assets/svgs/CalendarIcon';
import { DateType } from './DateType';
import { Period } from './Period';

export const DateFilter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='date-filter'>
      <p onClick={() => setIsOpen(!isOpen)} className='date-filter-time'>
        <CalendarIcon />: 01/01/2021 - 01/01/2021
      </p>
      {isOpen && (
        <div className='date-filter-dropdown'>
          <DateType />
          <DateAndHour dateType='from' />
          <Period />
          <button className='date-filter-dropdown__button'>Valider</button>
        </div>
      )}
    </div>
  );
};
