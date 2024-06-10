import { useState, useEffect } from 'react';

export const useOtpTimer = (initialTime: number, precision: number) => {
  const [timer, setTimer] = useState<number>(initialTime);

  const resetTimer = () => {
    setTimer(initialTime);
  };

  useEffect(() => {
    if (timer > 0) {
      const timeoutId = setTimeout(() => setTimer(timer - 1), precision);
      return () => clearTimeout(timeoutId);
    }
  }, [timer]);

  return { timer, resetTimer };
};