import {reduceDuration, setIsGameStarted} from '@/redux/features/hiveSlice';
import {RootState} from '@/redux/store';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const useTimer = () => {
  const {isGameStarted, duration, isGameFinished, gameSession} = useSelector(
    (state: RootState) => state.hiveSlice.value
  );
  const dispatch = useDispatch();
  let intervalId: NodeJS.Timeout;
  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [isGameFinished, gameSession]);

  const startTimer = () => {
    if (!isGameStarted) {
      dispatch(setIsGameStarted(true));
      intervalId = setInterval(() => {
        dispatch(reduceDuration());
      }, 1000);
    }
  };
  const resetTimer = () => {
    clearInterval(intervalId);
  };
  const calculateTime = (value: number) => {
    const minutes = Math.floor(value / 60);
    const minutes0 = minutes < 10 ? `0${minutes}` : minutes;
    const seconds = Math.floor(value % 60);
    const seconds0 = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes0}:${seconds0}`;
  };

  return {calculateTime, startTimer, resetTimer};
};
export default useTimer;
