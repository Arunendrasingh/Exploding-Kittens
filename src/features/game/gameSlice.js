import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardLength: 0,
  totalLifeline: 0,
  cardDetail: [],
  gameStatus: "",
  selectedCard: null,
  gameResult: "",
  isLoading: false,
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
    startNewGame(state, action) {
      state.cardLength = 0;
      state.totalLifeline = 0;
      state.cardDetail = [];
      state.gameStatus = "";
      state.selectedCard = null;
      state.gameResult = "";
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const {
  setCardDetail,
  increaseLifeline,
  decreaseLifeline,
  setSelectedCard,
  setGameStatus,
  startNewGame,
  setIsLoading,
} = gameSlice.actions;
export default gameSlice.reducer;
