import { useState } from 'react';
import { ContactFormWrapper, FormLabel } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { createContact } from 'redux/contacts/operation';
import { Button, Input } from '@chakra-ui/react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const addContact = contact => dispatch(createContact(contact));

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.error(`Name - ${name} is not defined`);
    }
  };

  const onAddToContactSubmit = e => {
    e.preventDefault();

    if (contacts.some(contact => contact.name === name)) alertmessage(name);
    else addContact({ name, number });

    setName('');
    setNumber('');
  };

  const alertmessage = name => alert(`${name} is already in contacts`);

  return (
    <ContactFormWrapper onSubmit={onAddToContactSubmit}>
      <FormLabel htmlFor="name">Name</FormLabel>
      <Input
        focusBorderColor="blue.400"
        pr="4.5rem"
        placeholder="Enter name"
        type="text"
        id="name"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
        value={name}
      />
      <FormLabel htmlFor="tel">Number</FormLabel>
      <Input
        focusBorderColor="blue.400"
        pr="4.5rem"
        placeholder="Enter number"
        type="tel"
        id="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
        value={number}
      />
      <Button colorScheme="pink" variant="outline" type="submit" mt="2">
        Add to contact
      </Button>
    </ContactFormWrapper>
  );
};

export default ContactForm;
