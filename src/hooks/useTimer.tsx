import {useState} from 'react';

const useTimer = () => {
  const [currentTime, setCurrentTime] = useState(10);
  const [isGameStarted, setIsGameStarted] = useState(false);

  const startTimer = () => {
    if (!isGameStarted) {
      setIsGameStarted(true);
      const intervalId = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev > 0) {
            return prev - 1;
          } else {
            clearInterval(intervalId);
            setIsGameStarted(false);
            return 0;
          }
        });
      }, 1000);
    }
  };
  const calculateTime = (value: number) => {
    const minutes = Math.floor(value / 60);
    const minutes0 = minutes < 10 ? `0${minutes}` : minutes;
    const seconds = Math.floor(value % 60);
    const seconds0 = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes0}:${seconds0}`;
  };

  return {currentTime, isGameStarted, startTimer, calculateTime};
};
export default useTimer;
