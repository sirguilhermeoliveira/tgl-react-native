import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GameObject {
  color: string;
  description: string;
  id: number;
  max_number: number;
  price: string;
  range: number;
  type: string;
}

interface GameState {
  games: GameObject[];
}

const initialGameState: GameState = {
  games: [],
};
const gameSlice = createSlice({
  name: 'game',
  initialState: initialGameState,
  reducers: {
    getGames(state: GameState, action: PayloadAction<GameObject[]>) {
      if (action.payload) {
        let helperPayload = action.payload.reverse();
        state.games = helperPayload;
      }
    },
  },
});

export const gameActions = gameSlice.actions;
export default gameSlice.reducer;
