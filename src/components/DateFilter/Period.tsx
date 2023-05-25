import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { PrevIcon } from '../../assets/svgs/PrevIcon';
import { NextIcon } from '../../assets/svgs/NextIcon';
import { helperDate, helperResetDate } from '../../helpers/helperDate';
import { useState } from 'react';

const LabelsList = [
  { label: 'Jour', value: 'day' },
  { label: 'Semaine', value: 'week' },
  { label: 'Mois', value: 'month' },
  { label: 'Année', value: 'year' },
] as const;

export const Period = () => {
  const [labelSelected, setLabelSelected] = useState<any>();

  const handleSelectLabel = (value: string) => {
    setLabelSelected(value);
  };

  const calendarViewType =
    ['day', 'week'].includes(labelSelected) || !labelSelected
      ? 'month'
      : labelSelected === 'year'
      ? 'decade'
      : 'year';

  return (
    <div className='date-filter-period'>
      <div className='date-period-labels'>
        {LabelsList.map((item, index) => {
          return (
            <div
              key={index}
              className={`date-period-label ${
                labelSelected === item.value ? 'date-period-label--active' : ''
              }`}
              onClick={() => handleSelectLabel(item.value)}
            >
              <p>{item.label}</p>
            </div>
          );
        })}
      </div>

      <div className='date-period-calendars'>
        <Calendar
          prevLabel={<PrevIcon />}
          nextLabel={<NextIcon />}
          formatMonth={(locale, date) =>
            helperDate(date || new Date(), 'MMM').slice(0, 3)
          }
          formatShortWeekday={(locale, date) => helperDate(date, 'dd')}
          view={calendarViewType}
          //   onClickDecade={(date) => handleChangeDate(date)}
          //   onClickMonth={(date) => handleChangeDate(date)}
          //   onClickYear={(date) => handleChangeDate(date)}
          //   onClickDay={(date) => handleChangeDate(date)}
          //   value={
          //     labelSelected === 'week'
          //       ? [
          //           date,
          //           helperResetDate(date || new Date())
          //             .add(+6, 'day')
          //             .toDate(),
          //         ]
          //       : date
          //   }
        />
      </div>
    </div>
  );
};
