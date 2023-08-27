import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

interface OTPState {
  value: string;
  newValue: string
}

const initialState = {
  value: '',
  newValue: ''
} as OTPState;

export const otpSlice = createSlice({
  name: 'otp',
  initialState,
  reducers: {
    Value: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    newValue: (state, action: PayloadAction<string>) => {
      state.newValue = state.value;
    },
   
  },
});

export const { Value, newValue } = otpSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectValue = (state: RootState) => state.otp.value;
export default otpSlice.reducer;
