import React from 'react';
import styles from './Header.module.scss';

type Props = {
  toggleTheme?: () => void;
  darkMode?: boolean;
};

const Header: React.FC<Props> = ({ toggleTheme, darkMode }) => (
  <header className={styles.header}>
    <h1>Ravi Kumar Rana</h1>
    <nav>
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      <button onClick={toggleTheme} className={styles.themeBtn}>
        {darkMode ? 'Dark' : 'Light'}
      </button>
    </nav>
  </header>
);

export default Header;
