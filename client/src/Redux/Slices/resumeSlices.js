import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resumeAllData: null,
  templateId: null,
  loading: false,
  error: false,
};

export const resumeSlice = createSlice({
  name: "resumeSlice",
  initialState,
  reducers: {
    resumePending: (state) => {
      state.loading = true;
    },

    resumeSuccess: (state, action) => {
      state.loading = false;
      state.resumeAllData = action.payload;
      state.templateId = action.payload.templateId;
    },

    resumeFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  resumePending,
  resumeSuccess,
  resumeFailure,
} = resumeSlice.actions;

export default resumeSlice.reducer;
