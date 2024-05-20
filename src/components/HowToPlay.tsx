'use client';
import {reduceDuration, setIsGameStarted} from '@/redux/features/hiveSlice';
import {RootState} from '@/redux/store';
import Dialog from '@mui/material/Dialog';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
interface Props {
  t: any;
}

const HowToPlay = ({t}: Props) => {
  const [open, setOpen] = useState(true);
  const {isGameStarted, duration} = useSelector(
    (state: RootState) => state.hiveSlice.value
  );
  const dispatch = useDispatch();

  const handleStart = () => {
    setOpen(false);
    startTimer();
  };
  let intervalId: any;

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const startTimer = () => {
    if (!isGameStarted) {
      dispatch(setIsGameStarted(true));
      intervalId = setInterval(() => {
        if (duration > 0) {
          dispatch(reduceDuration());
        } else {
          dispatch(setIsGameStarted(false));
          clearInterval(intervalId);
          return;
        }
      }, 1000);
    }
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
