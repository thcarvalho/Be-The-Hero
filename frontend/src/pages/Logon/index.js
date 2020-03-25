import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import './styles.css';
import '../../global.css';

import logoImg from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";
import api from '../../services/api';


export default function Logon() {
  const [id, setId] = useState('')

  const history = useHistory()

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post('session', { id })
      localStorage.setItem('@ongId', id)
      localStorage.setItem('@ongName', response.data.name)
      history.push('/profile')
    } catch (error) {
      alert("Falha ao Logar")
      console.log(error);
    }
  }
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be the Hero" />
        <form onSubmit={handleLogin}>
          <h1>Faça seu Logon</h1>
          <input
            onChange={e => setId(e.target.value)}
            value={id}
            placeholder="Sua ID"
          />
          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
