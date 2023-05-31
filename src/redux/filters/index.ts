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
}

const initialState: IState = {
  date: {
    dateType: 'between',
    fromDate: new Date(),
    toDate: new Date(),
    periodType: null,
  },
  users: [],
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
  },
});

export const { filterDateAction, filterUsersAction } = slice.actions;

export default slice.reducer;
