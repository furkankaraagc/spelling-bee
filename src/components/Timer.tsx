interface Props {
  calculateTime: (time: number) => string;
  currentTime: number;
}

const Timer = ({calculateTime, currentTime}: Props) => {
  return <h1>{calculateTime(currentTime)}</h1>;
};

export default Timer;
