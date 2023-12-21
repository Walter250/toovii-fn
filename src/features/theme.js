import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: {
      theme: "light",
      isDarkMode: false,
    },
  },
  reducers: {
    handleTheme: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { handleTheme } = themeSlice.actions;
export default themeSlice.reducer;
