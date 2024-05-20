import {createSlice} from '@reduxjs/toolkit';

interface InitialState {
  value: HiveTypes;
}
interface HiveTypes {
  duration: any;
  isGameStarted: boolean;
  foundWords: string[];
}

const initialState: InitialState = {
  value: {
    duration: 500,
    isGameStarted: false,
    foundWords: [],
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
      state.value.duration -= 1;
    },
    addMoreTime: (state, action) => {
      state.value.duration += action.payload;
    },
    addToFoundWords: (state, action) => {
      state.value.foundWords.push(action.payload);
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
} = hiveSlice.actions;
export default hiveSlice.reducer;
