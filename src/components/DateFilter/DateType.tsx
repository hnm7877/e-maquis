import { useState } from 'react';
import { ArrowMixVerticalIcon } from '../../assets/svgs/ArrowMixVertical';

const LIST = [
  {
    label: 'Égal à',
    value: 'equal',
  },
  {
    label: 'Entre le',
    value: 'between',
  },
  {
    label: 'Avant le',
    value: 'before',
  },
  {
    label: 'Après le',
    value: 'after',
  },
  {
    label: 'Par période',
    value: 'period',
  },
];

export const DateType = () => {
  const [showList, setShowList] = useState(false);
  const [selected, setSelected] = useState<null | (typeof LIST)[number]>(null);

  return (
    <div className='date-filter-types'>
      <div
        className={`date-filter-type date-filter-type__default ${
          showList ? 'date-filter-type__default-active' : ''
        }`}
        onClick={() => setShowList(!showList)}
      >
        <p>{selected?.label || 'Choisir'}</p>
        <ArrowMixVerticalIcon color='#98ed58' />
      </div>

      <div
        className={`date-filter-type__list${
          showList ? ' date-filter-type__list-active' : ''
        }`}
      >
        {LIST.map((item, index) => {
          return (
            <div
              key={index}
              className='date-filter-type date-filter-type__list-item'
              onClick={() => {
                setSelected(item);
                setShowList(false);
              }}
            >
              <p>{item.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
