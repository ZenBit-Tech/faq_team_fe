import { useState } from 'react';

export const useTogglePassVisibility = () => {
  const [isPassShown, setPassShown] = useState<boolean>(false);

  const togglePassVisibility = () => {
    setPassShown(!isPassShown);
  };

  return { isPassShown, togglePassVisibility };
};

