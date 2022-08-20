import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import MinhasFotos from '../../Assets/feed.svg';
import Estatisticas from '../../Assets/estatisticas.svg';
import AdicionarFoto from '../../Assets/adicionar.svg';
import Sair from '../../Assets/sair.svg';
import styles from '../../styles/UserHeaderNav.module.css';
import useMedia from '../../Hooks/useMedia';
const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const {pathname} = useLocation()
  React.useEffect(()=>{
    setMobileMenu(false)
  }, [pathname])

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
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
    </>
  );
};

export default UserHeaderNav;
