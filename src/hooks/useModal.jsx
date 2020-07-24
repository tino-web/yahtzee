import { useState } from 'react';

function useModal() {
  const [isShowing, setIsShowing] = useState(false);

  function toggleShow() {
    setIsShowing((prevValue) => !prevValue);
  }

  return {
    isShowing,
    toggleShow,
  };
}

export default useModal;
