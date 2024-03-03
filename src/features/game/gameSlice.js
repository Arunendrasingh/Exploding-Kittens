import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardLength: 0,
  totalLifeline: 0,
  cardDetail: [],
  gameStatus: "",
  selectedCard: null,
  gameResult: "",
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setCardDetail(state, action) {
      state.cardLength = action.payload.cardLength;
      state.cardDetail = action.payload.cardDetail;
      state.selectedCard = null;
    },
    increaseLifeline(state, action) {
      state.totalLifeline += 1;
      state.selectedCard = null;
    },
    decreaseLifeline(state, action) {
      state.totalLifeline -= 1;
      state.selectedCard = null;
    },

    setSelectedCard(state, action) {
      state.selectedCard = action.payload;
    },
    setGameResult(state, action) {
      state.gameResult = action.payload;
      state.selectedCard = null;
    },
    setGameStatus(state, action) {
      state.gameStatus = action.payload;
    },
  },
});

export const {
  setCardDetail,
  increaseLifeline,
  decreaseLifeline,
  setSelectedCard,
  setGameStatus,
} = gameSlice.actions;
export default gameSlice.reducer;
