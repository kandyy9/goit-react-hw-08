import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: { query: "" },
  reducers: {
    changeFilter(state, action) {
      state.query = action.payload;
    },
  },
});

export const selectNameFilter = (state) => state.filters.query;
export const { changeFilter } = slice.actions;
export default slice.reducer;
