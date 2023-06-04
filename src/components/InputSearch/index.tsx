import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { searchAction } from '../../redux/filters';
import './inputSearch.css';

export const InputSearch = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((s) => s.filters.search);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchAction(e.target.value));
  };

  return (
    <div className='input-search-container'>
      <input
        type='text'
        className='input-search'
        value={search}
        placeholder='Rechercher...'
        onChange={handleChange}
      />
    </div>
  );
};
