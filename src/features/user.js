import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      firstname: "",
      age: "",
      email: "",
    },
  },
  reducers: {},
});
