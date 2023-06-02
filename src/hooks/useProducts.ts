import { useQuery } from 'react-query';
import { useAppSelector } from './useRedux';
import { getVentesByDate } from '../api/ventes';

export const useProducts = () => {
  const date = useAppSelector((s) => s.filters.date);
  const users = useAppSelector((s) => s.filters.users);

  const { data: products, isLoading } = useQuery(
    ['getVentesByDate', date, users],
    () => getVentesByDate({ date, users: users.map((user) => user._id) })
  );

  return { products, isLoading };
};
