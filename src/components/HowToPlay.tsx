'use client';
import useTimer from '@/hooks/useTimer';
import Dialog from '@mui/material/Dialog';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
interface Props {
  t: any;
}

const HowToPlay = ({t}: Props) => {
  const [open, setOpen] = useState(true);

  const dispatch = useDispatch();
  const {startTimer} = useTimer();

  const handleStart = () => {
    setOpen(false);
    startTimer();
  };

  return (
    <Dialog disableEnforceFocus open={open}>
      <main className=' p-10 '>
        <h1 className='font-bold text-3xl pb-2'>{t.title}</h1>
        <h2 className='font-medium text-xl pb-2'>{t.title2}</h2>
        <ul>
          <li>{t.line1}</li>
          <li>{t.line2}</li>
          <li>{t.line3}</li>
          <li>{t.line4}</li>
          <li>{t.line5}</li>
        </ul>
        <div className=' flex justify-center '>
          <button
            className='rounded-lg border px-5 py-2 mt-3 active:scale-90 active:opacity-90 hover:opacity-95  bg-[#f7da21]'
            type='button'
            onClick={handleStart}
          >
            {t.start}
          </button>
        </div>
      </main>
    </Dialog>
  );
};
export default HowToPlay;
