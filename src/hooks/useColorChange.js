import { useState, useEffect } from 'react';

const useColorChange = () => {
  const [bgColor, setBgColor] = useState('yellow');
  const colors = ['yellow', 'blue', 'red'];
  const intervalTime = 3000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBgColor((prevColor) => {
        const currentIndex = colors.indexOf(prevColor);
        const nextIndex = (currentIndex + 1) % colors.length;
        return colors[nextIndex];
      });
    }, intervalTime);

    return () => clearInterval(intervalId);
  }, []);

  return bgColor;
};

export default useColorChange;