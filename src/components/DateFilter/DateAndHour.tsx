import DatePicker from 'react-datepicker';
import { helperDate } from '../../helpers/helperDate';

export const DateAndHour = ({ dateType }: { dateType?: 'from' | 'to' }) => {
  const date = new Date();

  const handleChangeDate = (date: Date | null) => {
    // TODO
    console.log('date', date);
  };

  //   const dispatch = useAppDispatch();

  //   const date = useAppSelector((s) =>
  //     dateType === 'from' ? s.date.fromDate : s.date.toDate
  //   );

  //   const time = useAppSelector((s) =>
  //     dateType === 'from' ? s.date.fromTime : s.date.toTime
  //   );

  //   const handleChangeDate = (date: Date | null) => {
  //     if (dateType === 'from') {
  //       dispatch(fromDateAction(date));
  //     } else {
  //       dispatch(toDateAction(date));
  //     }
  //   };

  //   const handleChangeTime = (date: Date | null) => {
  //     if (dateType === 'from') {
  //       dispatch(fromTimeAction(date));
  //     } else {
  //       dispatch(toTimeAction(date));
  //     }
  //   };

  return (
    <div className='date-filter-dates'>
      <div>
        <DatePicker
          selected={date}
          onChange={(date) => handleChangeDate(date)}
          locale={'fr'}
          customInput={
            <div className='date-filter-dates__input'>
              <p>{helperDate(new Date(), 'DD/MM/YYYY')}</p>
            </div>
          }
        />
      </div>
    </div>
  );
};
