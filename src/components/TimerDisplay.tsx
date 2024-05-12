'use client';

const TimerDisplay = ({calculateTime, currentTime}) => {
  return (
    <div>
      <h1>{calculateTime(currentTime)}</h1>
    </div>
  );
};

export default TimerDisplay;
