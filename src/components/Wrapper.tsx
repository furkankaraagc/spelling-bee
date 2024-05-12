'use client';
import useTimer from '@/hooks/useTimer';
import HowToPlay from './HowToPlay';
import TimerDisplay from './TimerDisplay';

const Wrapper = () => {
  const {startTimer, currentTime, calculateTime} = useTimer();

  return (
    <main>
      <HowToPlay startTimer={startTimer} />
      <TimerDisplay calculateTime={calculateTime} currentTime={currentTime} />
      {/* <h1>{t('title')}</h1> */}
    </main>
  );
};

export default Wrapper;
