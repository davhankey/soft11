import { NavLink } from 'react-router-dom';
import styles from "./navigation.module.scss";

const Navigation = () => (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.item}><NavLink to='/'>Home</NavLink></li>
        <li className={styles.item}><NavLink to='/about'>About</NavLink></li>
        <li className={styles.item}><NavLink to='/contact'>Contact</NavLink></li>
        <li className={styles.item}><NavLink to='/signup'>Sign Up</NavLink></li>
      </ul>
    </nav>
  );


  Navigation.displayName = "Navigation";

export default Navigation;