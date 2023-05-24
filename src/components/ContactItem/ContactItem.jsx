import PropTypes from 'prop-types';
import { Contact } from './ContactItem.styled';
import { Button } from '@chakra-ui/react';

export const ContactItem = ({ name, id, number, removeContact }) => {
  return (
    <Contact name="contact">
      {name}: {number}
      <Button
        colorScheme="blue"
        variant="outline"
        type="submit"
        onClick={() => removeContact(id)}
        id={id}
        ml={2}
        fontFamily="Shrikhand"
      >
        Delete
      </Button>
    </Contact>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  removeContact: PropTypes.func.isRequired,
};
