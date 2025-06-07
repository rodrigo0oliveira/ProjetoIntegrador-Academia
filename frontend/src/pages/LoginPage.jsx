import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Validação dos campos
    if (!email || !senha) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Por favor, insira um email válido.');
      return;
    }

    try {
      const resposta = await fetch('http://localhost:3000/usuarios/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha }),
      });

      const dados = await resposta.json();
      console.log(dados);

      if (resposta.ok) {
        alert('Login feito com sucesso!');
        navigate('/');
      } else {
        setError(dados.mensagem || 'Erro no login');
      }
    } catch (erro) {
      console.error('Erro ao conectar:', erro);
      setError('Erro ao conectar ao servidor');
    }
  };

  return (
    <div style={{
      backgroundColor: '#1E3A8A',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
      }}>
        <h1 style={{ fontSize: '40px', marginBottom: '20px' }}>🏋️</h1>
        {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            margin: '10px 0',
            padding: '10px',
            width: '250px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '16px',
            backgroundColor: 'white',
            color: 'black'
          }}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          style={{
            margin: '10px 0',
            padding: '10px',
            width: '250px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '16px',
            backgroundColor: 'white',
            color: 'black'
          }}
        />
        <button
          onClick={handleLogin}
          style={{
            margin: '10px 0',
            padding: '10px',
            width: '270px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: 'white',
            color: '#1E3A8A',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          LOGIN
        </button>
        <p style={{ textAlign: 'center', fontSize: '12px', marginTop: '10px' }}>
          Esqueceu a senha?
        </p>
      </div>
    </div>
  );
}

export default LoginPage;