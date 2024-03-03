import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./features/game/gameSlice";
import userReducer from "./features/users/usersSlice";

const store = configureStore({
  reducer: {
    game: gameReducer,
    user: userReducer,
  },
});

export default store;
