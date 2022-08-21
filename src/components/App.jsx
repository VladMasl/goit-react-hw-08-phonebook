import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import { getCurrentUser } from '../redux/registration/authOperations';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import s from '../components/App.module.css';

const LogInPage = lazy(() => import('pages/logInPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    <div className={s.decor}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            path="contacts"
            element={
              <PrivateRoute restricted>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted>
                <LogInPage />
              </PublicRoute>
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
