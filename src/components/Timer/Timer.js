import React, { useState } from 'react';

const Timer = (props) => {
  // start = timer start time in seconds
  const [start, setStart] = useState(props.start);

  let hrs = Math.floor(start / 3600);
  let mins = Math.floor((start / 60) - hrs * 60);
  let seconds = start % 60;

  setTimeout(() => {
    setStart(start + 1);
  }, 1000);

  return (
    <span>
      {hrs}h {mins}m {seconds}s
    </span>
  );
}

export default Timer;