import {createSlice} from '@reduxjs/toolkit';

interface InitialState {
  value: HiveTypes;
}
interface HiveTypes {
  duration: number;
  isGameStarted: boolean;
  isGameFinished: boolean;
  foundWords: string[];
  gameSession: number;
  score: number;
}

const initialState: InitialState = {
  value: {
    duration: 60,
    isGameStarted: false,
    gameSession: 0,
    isGameFinished: false,
    foundWords: [],
    score: 0,
  },
};

export const hiveSlice = createSlice({
  name: 'hive',
  initialState: initialState,
  reducers: {
    setIsGameStarted: (state, action) => {
      state.value.isGameStarted = action.payload;
    },
    reduceDuration: (state) => {
      if (state.value.duration > 0) {
        state.value.duration--;
      } else {
        state.value.isGameFinished = true;
        state.value.gameSession++;
      }
    },
    incrementGameSession: (state) => {
      state.value.gameSession++;
    },
    addMoreTime: (state, action) => {
      state.value.duration += action.payload;
    },
    addToFoundWords: (state, action) => {
      state.value.foundWords.push(action.payload);
    },
    incrementScore: (state, action) => {
      const point = action.payload - 3;
      state.value.score += point;
    },
    reset: () => {
      return initialState;
    },
  },
});

export const {
  reset,
  setIsGameStarted,
  addToFoundWords,
  addMoreTime,
  reduceDuration,
  incrementScore,
  incrementGameSession,
} = hiveSlice.actions;
export default hiveSlice.reducer;
