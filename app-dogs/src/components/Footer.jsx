import React from 'react';
import styles from '../styles/Footer.module.css';
import Dogs from '../Assets/dogs-footer.svg';
import useFetch from '../Hooks/useFetch';

const Footer = () => {

  return (
    <footer className={styles.footer}>
      <img src={Dogs} alt="Dogs footer" />
      <p>Dogs. Alguns direitos reservados</p>
    </footer>
  );
};

export default Footer;
