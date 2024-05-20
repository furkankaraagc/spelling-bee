import {useEffect, useState} from 'react';
import SingleHive from './SingleHive';

interface Props {
  selectedLetters: {
    answers: string[];
    centerLetter: string;
    outerLetters: string[];
    id: number;
  };
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  inputRef: React.RefObject<HTMLInputElement>;
}

const Hive = ({selectedLetters, setInputValue, inputRef}: Props) => {
  const [outerLetters, setOuterLetters] = useState<string[]>([]);

  useEffect(() => {
    const array = selectedLetters.outerLetters;
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    setOuterLetters(array);
  }, []);

  return (
    <main className='relative  w-[300px] h-[300px] '>
      <SingleHive
        style={{
          top: 0,
          left: 0,
          right: 0,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        text={outerLetters[0]}
        fill='lightgray'
        setInputValue={setInputValue}
        inputRef={inputRef}
      />
      <SingleHive
        style={{
          top: 86,
          left: 0,
          right: 0,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        text={selectedLetters.centerLetter}
        fill='#f7da21'
        setInputValue={setInputValue}
        inputRef={inputRef}
      />
      <SingleHive
        style={{
          top: 86 * 2,
          left: 0,
          right: 0,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        text={outerLetters[1]}
        fill='lightgray'
        setInputValue={setInputValue}
        inputRef={inputRef}
      />
      <SingleHive
        style={{top: 86 / 2, left: 22, right: 0}}
        text={outerLetters[2]}
        fill='lightgray'
        setInputValue={setInputValue}
        inputRef={inputRef}
      />
      <SingleHive
        style={{top: 86 / 2, left: 176, right: 0}}
        text={outerLetters[3]}
        fill='lightgray'
        setInputValue={setInputValue}
        inputRef={inputRef}
      />
      <SingleHive
        style={{top: 86 * 1.5, left: 22, right: 0}}
        text={outerLetters[4]}
        fill='lightgray'
        setInputValue={setInputValue}
        inputRef={inputRef}
      />
      <SingleHive
        style={{top: 86 * 1.5, left: 176, right: 0}}
        text={outerLetters[5]}
        fill='lightgray'
        setInputValue={setInputValue}
        inputRef={inputRef}
      />
    </main>
  );
};

export default Hive;
