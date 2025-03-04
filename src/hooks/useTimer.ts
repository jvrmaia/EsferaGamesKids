import { useState, useEffect, useCallback } from 'react';

const useTimer = (initialTime: number = 300) => { // 5 minutos em segundos
  const [time, setTime] = useState<number>(initialTime);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const startTimer = useCallback(() => {
    setIsRunning(true);
  }, []);

  const stopTimer = useCallback(() => {
    setIsRunning(false);
  }, []);

  const resetTimer = useCallback(() => {
    setTime(initialTime);
    setIsRunning(false);
    setIsFinished(false);
  }, [initialTime]);

  useEffect(() => {
    let interval: number | undefined;

    if (isRunning && time > 0) {
      interval = window.setInterval(() => {
        setTime((prevTime) => {
          const newTime = prevTime - 1;
          if (newTime <= 0) {
            setIsRunning(false);
            setIsFinished(true);
            return 0;
          }
          return newTime;
        });
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning, time]);

  const formatTime = useCallback(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }, [time]);

  return {
    time,
    isRunning,
    isFinished,
    startTimer,
    stopTimer,
    resetTimer,
    formatTime,
  };
};

export default useTimer; 