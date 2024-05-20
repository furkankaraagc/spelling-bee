'use client';
import useTimer from '@/hooks/useTimer';
import HowToPlay from './HowToPlay';
import Timer from './Timer';

interface Props {
  t: any;
}
const Wrapper = ({t}: Props) => {
  const {startTimer, currentTime, calculateTime, addMoreTime} = useTimer();
  return (
    <main>
      <HowToPlay startTimer={startTimer} />
      <Timer calculateTime={calculateTime} currentTime={currentTime} />
    </main>
  );
};

export default Wrapper;
