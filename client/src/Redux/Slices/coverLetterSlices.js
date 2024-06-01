import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentData: null,
    templateId: null,
    loading: false,
    error: false,
};

export const coverLetterSlice = createSlice({
    name: "coverLetter",
    initialState,
    reducers: {
        letterPending: (state) => {
            state.loading = true;
        },

        letterSuccess: (state, action) => {
            state.loading = false;
            state.currentData = action.payload;
            state.templateId = action.payload.templateId
        },

        letterFailure: (state) => {
            state.loading = false;
            state.error = true;
        },
    },
});

export const {
    letterPending,
    letterSuccess,
    letterFailure,
} = coverLetterSlice.actions;

export default coverLetterSlice.reducer;
