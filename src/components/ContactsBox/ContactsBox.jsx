import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { getItems } from 'redux/contacts/contactsSelrctor';
import { getContacts } from 'redux/contacts/contactOperations';
import s from './ContactsBox.module.css';

const ContactsBox = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getItems);
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <h1 className={s.title}>Phonebook📱</h1>
      <ContactForm />

      {contacts.length === 0 ? (
        <h2 className={s.title}>
          You have no records☝
          <br />
          Enter the number and name☝
        </h2>
      ) : (
        <>
          <h2 className={s.title}>Contacts: {contacts.length}</h2>
          <Filter />
          <ContactList />
        </>
      )}
    </>
  );
};

export default ContactsBox;
