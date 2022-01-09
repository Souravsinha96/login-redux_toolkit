import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    password: "",
  },

  reducers: {
    login: (state, { payload }) => {
      state.username = payload.username;
      state.password = payload.password;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
