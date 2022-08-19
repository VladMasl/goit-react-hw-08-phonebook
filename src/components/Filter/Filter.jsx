import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contactsSlice';
import { getFilter } from '../../redux/contacts/contactsSelrctor';
import s from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
        className={s.input}
      />
    </label>
  );
};

export default Filter;
