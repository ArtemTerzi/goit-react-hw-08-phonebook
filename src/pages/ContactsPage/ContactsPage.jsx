import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from 'components/Filter';
import { ListTitle, Wrapper } from './ContactsPage.styled';

const ContactsPage = () => {
  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm />
      <ListTitle>Contacts</ListTitle>
      <Filter />
      <ContactList />
    </Wrapper>
  );
};

export default ContactsPage;
