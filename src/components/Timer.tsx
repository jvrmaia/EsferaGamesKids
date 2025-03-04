import React from 'react';

interface TimerProps {
  time: string;
  isFinished: boolean;
}

const Timer: React.FC<TimerProps> = ({ time, isFinished }) => {
  return (
    <div className={`px-4 py-2 rounded-md font-mono text-lg font-bold ${
      isFinished ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
    }`}>
      {time}
    </div>
  );
};

export default Timer; 