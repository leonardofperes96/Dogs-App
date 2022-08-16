import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import MinhasFotos from '../../Assets/feed.svg';
import Estatisticas from '../../Assets/estatisticas.svg';
import AdicionarFoto from '../../Assets/adicionar.svg';
import Sair from '../../Assets/sair.svg';
import styles from '../../styles/UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);

  const { userLogout } = React.useContext(UserContext);

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        <img src={MinhasFotos} alt="Fotos Icon" />
        {mobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <img src={Estatisticas} alt="Estatisticas Icon" />
        {mobile && 'Estatisticas'}
      </NavLink>
      <NavLink to="/conta/postar">
        <img src={AdicionarFoto} alt="AddFotos Icon" />
        {mobile && 'Adicionar Fotos'}
      </NavLink>
      <button onClick={userLogout}>
        <img src={Sair} alt="Sair Icon" />
        {mobile && 'Sair'}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
