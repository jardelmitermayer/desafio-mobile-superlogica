import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoadingState {
  loading: boolean;
}

const initialState: LoadingState = {
  loading: false
}

const loadingSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    execute: (state) => {
      state.loading = true
    },
    finish: (state, { payload }: PayloadAction<LoadingState>) => {
      state.loading = payload.loading;
    },
  },
});

export default loadingSlice
