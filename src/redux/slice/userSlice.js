import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { login, register } from '~/api/userApi';

const initialState = {
  isLoading: false,
  user: null,
};

export const handleLogin = createAsyncThunk(
  'user/login',
  async (body, { rejectWithValue }) => {
    try {
      const res = await login(body);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const handleRegister = createAsyncThunk(
  'user/register',
  async (body, { rejectWithValue }) => {
    try {
      const res = await register(body);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleLogin.fulfilled, (state, action) => {
      state.user = action.payload;
      console.log('Login success');
    });
    builder.addCase(handleRegister.fulfilled, (state, action) => {
      state.user = action.payload;
      console.log('Register success');
    });
    builder.addMatcher(
      (action) => action.type.endsWith('/pending'),
      (state, action) => {
        state.isLoading = true;
      },
    );
    builder.addMatcher(
      (action) =>
        action.type.endsWith('/fulfilled') || action.type.endsWith('/rejected'),
      (state, action) => {
        state.isLoading = false;
      },
    );
  },
});

export default userSlice.reducer;
