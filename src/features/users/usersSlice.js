import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  userScore: 0,
  isLoading: false,
  totalGame: 0,
  totalGameScore: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action) {
      state.userName = action.payload;
    },
    updateUserCurrentScore(state, action) {
      state.userScore += 1;
    },
    setLoader(state, action) {
      state.isLoading = action.payload;
    },
    setScore(state, action) {
      state.totalGameScore += state.userScore;
    },
    resetForNewGame(state, action) {
      state.totalGameScore += state.userScore;
      state.userScore = 0;
      state.isLoading = false;
      state.totalGame += 1;
    },
    // IncreaseTotalPlayedGame(state, action) {
    // },
  },
});

export const {
  addUser,
  updateUserCurrentScore,
  setLoader,
  // IncreaseTotalPlayedGame,
  setScore,
  resetForNewGame,
} = userSlice.actions;
export default userSlice.reducer;
