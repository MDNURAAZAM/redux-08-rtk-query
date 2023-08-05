import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "All",
  search: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addFilter: (state, action) => {
      state.filter = action.payload;
    },
    addSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { addFilter, addSearch } = filterSlice.actions;
