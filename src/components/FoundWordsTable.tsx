'use client';
import {RootState} from '@/redux/store';
import {useSelector} from 'react-redux';

interface Props {
  t: any;
}

const FoundWordsTable = ({t}: Props) => {
  const {foundWords} = useSelector((state: RootState) => state.hiveSlice.value);

  return (
    <div className='border rounded-xl px-8 py-3 overflow-auto '>
      <h1 className='font-medium border-b'>{`${t.title} ${foundWords.length} `}</h1>
      {foundWords.map((word, index) => (
        <p key={index}>{word}</p>
      ))}
    </div>
  );
};

export default FoundWordsTable;
