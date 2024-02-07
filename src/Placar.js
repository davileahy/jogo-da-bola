// src/Placar.js
import React from 'react';

const Placar = ({ acertos, erros }) => {
  return (
    <div style={styles.placarContainer}>
      <div style={styles.contador}>Acertos: {acertos}</div>
      <div style={styles.contador}>Erros: {erros}</div>
    </div>
  );
};

const styles = {
  placarContainer: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    padding: '10px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  contador: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
};

export default Placar;
