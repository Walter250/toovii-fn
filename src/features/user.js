import { createSlice } from "@reduxjs/toolkit";

const userInfo = {
  affiliateReference: "",
  dateOfBirth: "",
  email: "",
  firstname: "",
  id: NaN,
  lastname: "",
  permission: "",
  phone: "",
  username: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      isLogged: false,
      currentUser: userInfo,
    },
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout(state) {
      state.value = { isLogged: false, currentUser: userInfo };
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
