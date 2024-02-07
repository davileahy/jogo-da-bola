// src/App.js
import React, { useState } from 'react';
import Bola from './Bola';
import Placar from './Placar'; // Importe o novo componente

function App() {
  const [acertos, setAcertos] = useState(0);
  const [erros, setErros] = useState(0);

  const registrarAcerto = () => {
    setAcertos(acertos + 1);
  };

  const registrarErro = (e) => {
    // Impede que o evento de clique se propague para a bola
    // quando o clique ocorrer no container, mas fora da bola
    if (e.target === e.currentTarget) {
      setErros(erros + 1);
    }
  };

  return (
    <div className="App" onClick={registrarErro} style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #009FFF, #EC2F4B)',
    }}>
      <Placar acertos={acertos} erros={erros} /> {/* Utilize o componente Placar */}
      <Bola registrarAcerto={registrarAcerto}/>
    </div>
  );
}

export default App;
