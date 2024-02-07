import React, {useState} from 'react';

const Bola = ({ registrarAcerto }) => {
  const [posicao, setPosicao] = useState({ bottom: 0, left: 50 });

  const pularParaPosicaoAleatoria = () => {
    registrarAcerto(); // Registra o acerto quando a bola é clicada
    const novaPosicao = {
      bottom: Math.random() * (window.innerHeight - 50),
      left: Math.random() * (window.innerWidth - 50)
    };
    setPosicao(novaPosicao);
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation(); // Impede que o evento de clique se propague para o App
        pularParaPosicaoAleatoria();
      }}
      style={{
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: '#FF5733',
        position: 'absolute',
        bottom: `${posicao.bottom}px`,
        left: `${posicao.left}px`,
        cursor: 'pointer',
        transition: 'all 0.5s ease-out',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
      }}
    />
  );
};

export default Bola;
