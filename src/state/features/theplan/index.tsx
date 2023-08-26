import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

interface planState {
  plan: boolean;
}

const initialState = {
  plan: false,
} as planState;

export const theplanSlice = createSlice({
  name: 'theplan',
  initialState,
  reducers: {
    thereisplan: (state) => {
      state.plan != state.plan;
    },

    thereisnoplan: (state) => {
      state.plan = state.plan;
    },
  },
});

export const { thereisplan, thereisnoplan } = theplanSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectThePlan = (state: RootState) => state.theplan.plan;
export default theplanSlice.reducer;
