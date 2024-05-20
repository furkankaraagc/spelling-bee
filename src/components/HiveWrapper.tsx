'use client';
import {useRef, useState} from 'react';
import Hive from './Hive';
import WordInput from './WordInput';

interface Props {
  t: any;
  selectedLetters: {
    answers: string[];
    centerLetter: string;
    outerLetters: string[];
    id: number;
  };
}

const HiveWrapper = ({selectedLetters, t}: Props) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className='flex-col gap-2  w-[320px]'>
      <WordInput
        t={t}
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
