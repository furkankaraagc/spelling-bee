'use client';

import {useState} from 'react';

interface Props {
  answers: string[];
  t: any;
}

const AnswersTable = ({answers, t}: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className='border rounded-xl px-8'>
      <h1
        onClick={() => setIsVisible(!isVisible)}
        className=' font-medium border-b cursor-pointer'
      >{`${!isVisible ? t.show : t.close} ${t.answers}`}</h1>
      {isVisible &&
        answers.map((word, index) => (
          <p className='' key={index}>
            {word}
          </p>
        ))}
    </div>
  );
};

export default AnswersTable;
