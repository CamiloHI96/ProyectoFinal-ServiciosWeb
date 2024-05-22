import React from 'react';
import useWindowWidth from './hooks/useWindowWidth';
import useColorChange from './hooks/useColorChange';
import useRandomNumber from './hooks/useRandomNumber';

function App() {
  const windowWidth = useWindowWidth();
  const bgColor = useColorChange();
  const { randomNumber, generateRandomNumber } = useRandomNumber(1, 100);

  return (
    <div className="container" style={{ backgroundColor: bgColor}}>
      <h1>App Component</h1>
      <p>ANCHO DE LA PANTALLA: {windowWidth}</p>
      <p>El color de fondo cambiará automáticamente cada 3 segundos.</p>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
      <p>Random Number: {randomNumber}</p>
    </div>
  );
}

export default App;