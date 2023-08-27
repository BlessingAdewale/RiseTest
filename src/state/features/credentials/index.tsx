import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

interface CredentialsState {
  email_address: string;
  password: string;
}

const initialState = {
  email_address: '',
  password: '',
} as CredentialsState;

export const credentialsSlice = createSlice({
  name: 'credentials',
  initialState,
  reducers: {
    getEmail: (state, action: PayloadAction<string>) => {
      state.email_address = action.payload;
    },
    getPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const { getEmail, getPassword } = credentialsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectEmail = (state: RootState) => state.credentials.email_address;
export const selectPhoneNumber = (state: RootState) => state.credentials.password;
export default credentialsSlice.reducer;
