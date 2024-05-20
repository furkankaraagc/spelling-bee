'use client';
import useTimer from '@/hooks/useTimer';
import {RootState} from '@/redux/store';
import {useSelector} from 'react-redux';

interface Props {
  t: any;
}

const TimerAndScore = ({t}: Props) => {
  const {calculateTime} = useTimer();
  const {duration} = useSelector((state: RootState) => state.hiveSlice.value);

  return (
    <section className='border flex gap-10'>
      <h1 className='w-[100px] text-2xl border-2  border-[#f7da21] rounded-lg flex justify-center'>
        {calculateTime(duration)}
      </h1>
      <h1 className='w-[120px] text-2xl border-2  border-[#f7da21] rounded-lg flex justify-center'>
        {t.title}: 0
      </h1>
    </section>
  );
};

export default TimerAndScore;
