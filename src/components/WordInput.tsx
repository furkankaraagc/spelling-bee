'use client';

import {
  addMoreTime,
  addToFoundWords,
  incrementScore,
} from '@/redux/features/hiveSlice';
import {RootState} from '@/redux/store';
import toast from 'react-hot-toast';
import {useDispatch, useSelector} from 'react-redux';

interface Props {
  t: any;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  inputValue: string;
  inputRef: React.RefObject<HTMLInputElement>;
  selectedLetters: {
    answers: string[];
    centerLetter: string;
    outerLetters: string[];
    id: number;
  };
}
const WordInput = ({
  t,
  selectedLetters,
  inputRef,
  inputValue,
  setInputValue,
}: Props) => {
  const {foundWords, isGameFinished} = useSelector(
    (state: RootState) => state.hiveSlice.value
  );
  const dispatch = useDispatch();

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.length < 4) {
      toast.error(t.errors.error1, {duration: 1000});
      return;
    }
    if (foundWords.includes(inputValue)) {
      toast.error(t.errors.error3, {duration: 1000});
      return;
    }
    if (selectedLetters.answers.includes(inputValue.toLowerCase())) {
      dispatch(addMoreTime(15));
      dispatch(addToFoundWords(inputValue));
      dispatch(incrementScore(inputValue.length));
      toast.success(t.correct, {duration: 1000});
    } else {
      toast.error(t.errors.error4, {duration: 1000});
    }
    setInputValue('');
  };
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.toUpperCase();
    value.trim();
    setInputValue(value);
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className='h-20 flex  justify-between items-center'
    >
      <input
        onBlur={(e) => e.target.focus()}
        autoFocus
        maxLength={12}
        ref={inputRef}
        value={inputValue}
        className='border-b-2 border-black h-12 text-2xl font-medium w-[200px]  px-3 py-1 focus:outline-none caret-[#f7da21]'
        onChange={onChangeHandler}
        type='text'
      />

      <button
        disabled={isGameFinished}
        className={`hover:opacity-95 active:opacity-90 active:scale-95 transition-all  border-2 text-md rounded-lg px-5 py-3 bg-[#f7da21] ${
          isGameFinished && 'opacity-60 pointer-events-none	'
        }`}
        type='submit'
      >
        {t.title}
      </button>
    </form>
  );
};

export default WordInput;
