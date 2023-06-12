import { axiosInstance } from './axiosInstance';
import { TEmployee } from './employees';

export type TCategorie = {
  nom: string;
  color: string;
  _id: string;
};

export type TVente = {
  nom: string;
  categorie: TCategorie;
  prix_vente: number;
  prix_achat: number;
  quantite: number;
  taille: string;
  _id: string;
  productId: string;
  total_vente: number;
  retour_quantite: number;
  benefice: number;
  employe: TEmployee;
};

export const getVentesByDate = async (filter: {
  date?: {
    fromDate: Date | null;
    toDate: Date | null;
  };
  users?: string[] | null;
}) => {
  let query = `?`;

  if (filter.date) {
    query += `from=${filter.date.fromDate}&to=${filter.date.toDate}`;
  }

  if (filter.users && filter.users?.length > 0) {
    query += `&users=${JSON.stringify(filter.users)}`;
  }

  const res = await axiosInstance.get<{
    data: TVente[];
  }>(`/vente/bilan${query}`);
  // const res = await axiosInstance.get<{

  return res?.data?.data;
};
