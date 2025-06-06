import React from 'react';

function HomePage() {
  return (
    <div style={{
      backgroundColor: '#f0f0f0',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>Bem-vindo à Academia!</h1>
      <p>Verifique os horários de pico e planeje seu treino.</p>
      <button
        style={{
          padding: '10px 20px',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: '#1E3A8A',
          color: 'white',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        Ver Horários
      </button>
    </div>
  );
}

export default HomePage;