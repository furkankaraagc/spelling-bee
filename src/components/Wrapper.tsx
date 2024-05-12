'use client';
import useTimer from '@/hooks/useTimer';
import HowToPlay from './HowToPlay';
import TimerDisplay from './TimerDisplay';

interface Props {
  selectedLetters: string[];
}
const Wrapper = ({selectedLetters}: Props) => {
  const {startTimer, currentTime, calculateTime} = useTimer();
  console.log(selectedLetters);
  return (
    <main>
      <HowToPlay startTimer={startTimer} />
      <TimerDisplay
        calculateTime={calculateTime}
        currentTime={currentTime}
        selectedLetters={selectedLetters}
      />

      {/* <h1>{t('title')}</h1> */}
    </main>
  );
};

export default Wrapper;
