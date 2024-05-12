'use client';

import {useRef, useState} from 'react';
import toast from 'react-hot-toast';

interface Props {
  calculateTime: (time: number) => string;
  currentTime: number;
  selectedLetters: {
    letters: string[];
    words: string[];
    id: number;
  };
}
const TimerDisplay = ({calculateTime, currentTime, selectedLetters}: Props) => {
  const [inputValue, setInputValue] = useState('');
  const [score, setScore] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.length < 4) {
      toast.error('Word must be at least 4 characters long', {duration: 1000});
      return;
    }
    if (selectedLetters.words.includes(inputValue)) {
      toast.success('Correct', {duration: 1000});
    } else {
      toast.error('Incorrect', {duration: 1000});
    }
    inputRef.current?.focus();
    setInputValue('');
  };
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value.trim();
    console.log(value);
    setInputValue(value);
  };
  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget);
    setInputValue(inputValue + e.currentTarget.textContent);
    inputRef.current?.focus();
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          autoFocus
          ref={inputRef}
          value={inputValue}
          className='border'
          onChange={onChangeHandler}
          type='text'
        />
        <button type='submit'>Submit</button>
      </form>
      <div>
        {selectedLetters.letters.map((letter, index) => (
          <button
            className='border rounded-md p-2 m-2'
            onClick={onClickHandler}
            key={index}
          >
            {letter}
          </button>
        ))}
      </div>

      <h1>{calculateTime(currentTime)}</h1>
    </div>
  );
};

export default TimerDisplay;
