import { useState } from 'react';

const useRandomNumber = (min, max) => {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(random);
  };

  return { randomNumber, generateRandomNumber };
};

export default useRandomNumber;
