import { useState } from 'react';

function useModal(defaultShow = false) {
  const [isShowing, setIsShowing] = useState(defaultShow);

  function toggleShow() {
    setIsShowing((prevValue) => !prevValue);
  }

  return {
    isShowing,
    toggleShow,
  };
}

export default useModal;
