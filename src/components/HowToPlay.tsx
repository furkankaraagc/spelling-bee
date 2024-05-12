'use client';
import Dialog from '@mui/material/Dialog';
import {useState} from 'react';
interface Props {
  startTimer: () => void;
}

const HowToPlay = ({startTimer}: Props) => {
  const [open, setOpen] = useState(true);

  const handleStart = () => {
    setOpen(false);
    startTimer();
  };

  return (
    <Dialog
      open={open}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <h1>How to play</h1>
      <button type='button' onClick={handleStart}>
        Start the game
      </button>
    </Dialog>
  );
};
export default HowToPlay;
