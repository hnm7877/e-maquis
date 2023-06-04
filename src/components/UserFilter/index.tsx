import { useEffect, useState } from 'react';
import { User } from './User';
import './userFilter.css';
import { filterUsersAction } from '../../redux/filters';
import { ButtonCustom } from '../ButtonCustom';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { TEmployee, getEmployees } from '../../api/employees';
import { useQuery } from 'react-query';

export const UserFilter = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [usersSelected, setUsersSelected] = useState<TEmployee[]>([]);
  const usersRedux = useAppSelector((s) => s.filters.users);

  const { data: users, isLoading } = useQuery('employes', getEmployees);

  const handleClick = (user: TEmployee) => {
    setUsersSelected((prevUsers) => {
      if (prevUsers.find((u) => u._id === user._id)) {
        return prevUsers.filter((u) => u._id !== user._id);
      } else {
        return [...prevUsers, user];
      }
    });
  };

  const handleSubmit = () => {
    setIsOpen(false);
    dispatch(filterUsersAction(usersSelected));
  };

  useEffect(() => {
    if (usersRedux?.length) {
      setUsersSelected(usersRedux);
    }
  }, [usersRedux]);

  return (
    <div className='users-filter'>
      <div
        className='users-filter--selected'
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>
          Employés:{' '}
          <span>{usersRedux?.map((user) => user.nom).join(' - ')}</span>
        </p>
      </div>
      {isOpen && (
        <div className='users-filter-list'>
          {isLoading && <p>Chargement...</p>}
          {!isLoading &&
            users?.map((user) => {
              const checked = usersSelected.find((u) => u._id === user._id);
              return (
                <User
                  name={`${user?.nom} ${user?.prenom}(${user?.role})`}
                  checked={!!checked}
                  setChecked={() => {
                    handleClick(user);
                  }}
                  handleClick={() => {
                    handleClick(user);
                  }}
                  key={user._id}
                />
              );
            })}

          <ButtonCustom onClick={handleSubmit} />
        </div>
      )}
    </div>
  );
};
