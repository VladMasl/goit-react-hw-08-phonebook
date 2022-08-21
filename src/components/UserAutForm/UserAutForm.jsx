import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logIn } from '../../redux/registration/authOperations';
import s from './UserAutForm.module.css';

function UserAutForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    resetForm();
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>
          Email
          <input
            className={s.input}
            type="text"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </label>
        <label className={s.label}>
          Password
          <input
            className={s.input}
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </label>

        <button type="submit" className={s.btn}>
          registr
        </button>
      </form>
    </>
  );
}

export default UserAutForm;
