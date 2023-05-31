import { axiosInstance } from './axiosInstance';

export type TEmployee = {
  nom: string;
  prenom: string;
  email: string;
  role: string;
  _id: string;
};

export const getEmployees = async () => {
  const res = await axiosInstance.get<{
    data: TEmployee[];
  }>('/allemploye');
  return res.data?.data;
};
