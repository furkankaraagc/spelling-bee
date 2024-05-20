'use client';

import useTimer from '@/hooks/useTimer';
import {useState} from 'react';
import toast from 'react-hot-toast';

interface Props {
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
  selectedLetters,
  inputRef,
  inputValue,
  setInputValue,
}: Props) => {
  const [words, setWords] = useState<string[]>(selectedLetters.answers);
  const [foundWords, setFoundWords] = useState<string[]>([]);
  const {addMoreTime} = useTimer();

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.length < 4) {
      // toast.error(t('error1'), {duration: 1000});
      return;
    }
    if (foundWords.includes(inputValue)) {
      toast.error('Word already found', {duration: 1000});
      return;
    }
    if (words.includes(inputValue)) {
      addMoreTime(15);
      setWords((prev) => prev.filter((word) => word !== inputValue));
      setFoundWords((prev) => [...prev, inputValue]);
      toast.success('Correct', {duration: 1000});
    } else {
      toast.error('Incorrect', {duration: 1000});
    }
    // inputRef.current?.focus();
    setInputValue('');
  };
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value.trim();
    console.log(value);
    setInputValue(value);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          onBlur={(e) => e.target.focus()}
          autoFocus
          maxLength={12}
          ref={inputRef}
          value={inputValue}
          className='border'
          onChange={onChangeHandler}
          type='text'
        />
        <button type='submit'>Submit</button>
      </form>

      <div className='border p-10'>
        {foundWords.map((word, index) => (
          <p key={index}>{word}</p>
        ))}
      </div>
    </div>
  );
};

export default WordInput;
