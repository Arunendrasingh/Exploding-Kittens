import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardLength: 0,
  totalLifeline: 0,
  cardDetail: [],
  isLoader: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setCardDetail(state, action) {
      state.cardLength = action.payload.cardLength;
      state.cardDetail = action.payload.cardDetail;
    },
    increaseLifeline(state, action) {
      state.totalLifeline += 1;
    },
    decreaseLifeline(state, action) {
      state.totalLifeline -= 1;
    },
    setIsLoader(state, action) {
      state.isLoader = action.payload;
    },
  },
});

export const {setCardDetail, increaseLifeline, decreaseLifeline, setIsLoader} = gameSlice.actions;
export default gameSlice.reducer;
