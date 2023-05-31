import { axiosInstance } from './axiosInstance';

type TVente = {
  nom: string;
  categorie: string;
  prix_vente: number;
  prix_achat: number;
  quantite: number;
  taille: string;
  _id: string;
  productId: string;
  total_vente: number;
  benefice: number;
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
