import { createSlice } from '@reduxjs/toolkit';

interface IState {
  date: {
    dateType: string | null;
    fromDate: Date;
    toDate: Date;
    periodType: string | null;
  };
}

const initialState: IState = {
  date: {
    dateType: 'between',
    fromDate: new Date(),
    toDate: new Date(),
    periodType: null,
  },
};

const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    // actions
    filterDateAction: (state, action) => {
      state.date = action.payload;
    },
  },
});

export const { filterDateAction } = slice.actions;

export default slice.reducer;
