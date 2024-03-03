import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  userScore: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action) {
      state.userName = action.payload;
    },
    updateUserScore(state, action) {
      state.userScore = action.payload.userScore;
    },
  },
});

export const { addUser, updateUserScore } = userSlice.actions;
export default userSlice.reducer;
