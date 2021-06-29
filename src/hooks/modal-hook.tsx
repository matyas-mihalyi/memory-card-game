//from https://medium.com/swlh/building-modals-in-react-64d92591f4b

import { useState } from "react";

export const useModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  function toggleModal() {
    setIsVisible(!isVisible);
  }

  return {
    isVisible,
    toggleModal,
  }
};



