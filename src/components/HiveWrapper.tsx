'use client';
import {useRef, useState} from 'react';
import Hive from './Hive';
import WordInput from './WordInput';

interface Props {
  selectedLetters: {
    answers: string[];
    centerLetter: string;
    outerLetters: string[];
    id: number;
  };
}

const HiveWrapper = ({selectedLetters}: Props) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <WordInput
        inputRef={inputRef}
        inputValue={inputValue}
        setInputValue={setInputValue}
        selectedLetters={selectedLetters}
      />
      <Hive
        inputRef={inputRef}
        setInputValue={setInputValue}
        selectedLetters={selectedLetters}
      />
    </div>
  );
};

export default HiveWrapper;
