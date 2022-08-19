import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsFilter } from '../../redux/contacts/contactsSelrctor';
import {
  deleteContacts,
  getContacts,
} from '../../redux/contacts/contactOperations';
import PropTypes from 'prop-types';

import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(contactsFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
    // eslint-disable-next-line
  }, []);

  return (
    <ul className={s.list}>
      {contacts.map(({ name, phone, id }) => (
        <li key={id} className={s.item}>
          <span className={s.span}>{name}:</span>
          <span>{phone}</span>
          <button
            className={s.btn}
            type="button"
            onClick={() => dispatch(deleteContacts(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};

export default ContactList;
