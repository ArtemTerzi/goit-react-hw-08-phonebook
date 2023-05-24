import ContactItem from 'components/ContactItem';
import { Contacts } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectErrorStatus,
  selectFilter,
  selectLoadingStatus,
} from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/contacts/operation';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectLoadingStatus);
  const error = useSelector(selectErrorStatus);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const removeContact = id => dispatch(deleteContact(id));

  const getFilterNormalize = () => filter.toLowerCase();

  const getFilteredContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(getFilterNormalize())
    );

  return (
    <Contacts>
      {contacts.length === 0 && (
        <b>
          There are no contacts to display. <br /> Use the form above to add
          contacts to your phone book.
        </b>
      )}
      {(isLoading && !error && <b>Request in progress...</b>) ||
        (error && <b>{error}</b>) ||
        getFilteredContacts().map(({ id, name, number }) => (
          <ContactItem
            name={name}
            key={id}
            id={id}
            number={number}
            removeContact={removeContact}
          />
        ))}
    </Contacts>
  );
};
