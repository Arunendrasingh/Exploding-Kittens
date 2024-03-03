import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  userScore: 0,
  isLoading: false,
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
    setLoader(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const { addUser, updateUserScore, setLoader } = userSlice.actions;
export default userSlice.reducer;
