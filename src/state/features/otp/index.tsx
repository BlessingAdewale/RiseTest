import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

interface OTPState {
  oldValue: string;
  newValue: string;
}

const initialState = {
  oldValue: '',
  newValue: '',
} as OTPState;

export const otpSlice = createSlice({
  name: 'otp',
  initialState,
  reducers: {
    oldValue: (state, action: PayloadAction<string>) => {
      state.oldValue = action.payload;
    },
    newValue: (state, action: PayloadAction<string>) => {
      state.newValue = action.payload;
    },
  },
});

export const { oldValue, newValue } = otpSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectOldValue = (state: RootState) => state.otp.oldValue;
export const selectNewValue = (state: RootState) => state.otp.newValue;
export default otpSlice.reducer;
