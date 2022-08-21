import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/registration/authOperations';
import { getUserEmail } from '../../redux/registration/authSelector';
import s from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);

  return (
    <div className={s.logout}>
      <p className={s.tex}>{email}</p>
      <button
        type="submit"
        onClick={() => dispatch(logOut())}
        className={s.btn}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
