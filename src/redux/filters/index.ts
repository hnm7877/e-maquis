import { createSlice } from '@reduxjs/toolkit';
import { TEmployee } from '../../api/employees';

interface IState {
  date: {
    dateType: string | null;
    fromDate: Date;
    toDate: Date;
    periodType: string | null;
  };
  users: TEmployee[];
  search: string;
}

const initialState: IState = {
  date: {
    dateType: 'between',
    fromDate: new Date(),
    toDate: new Date(),
    periodType: null,
  },
  users: [],
  search: '',
};

const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    // actions
    filterDateAction: (state, action) => {
      state.date = action.payload;
    },
    filterUsersAction: (state, action) => {
      state.users = action.payload;
    },
    searchAction: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { filterDateAction, filterUsersAction, searchAction } =
  slice.actions;

export default slice.reducer;
