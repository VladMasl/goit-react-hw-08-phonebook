import { NavLink, useLocation } from 'react-router-dom';
import s from './AuthNavigation.module.css';

const AuthNavigation = () => {
  const location = useLocation();

  return (
    <>
      <header className={s.header}>
        <nav className={s.nav}>
          <NavLink to="/register" className={s.navLink} state={location}>
            Registration
          </NavLink>
          <NavLink to="/login" className={s.navLink} state={location}>
            Sign in
          </NavLink>
        </nav>
      </header>
      <h1 className={s.title}>Log in to your account or register</h1>
    </>
  );
};

export default AuthNavigation;
