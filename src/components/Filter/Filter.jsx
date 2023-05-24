import { FilterLabel } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { changeFilter } from 'redux/contacts/filterSlice';
import { Input } from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = ({ target: { value } }) => dispatch(changeFilter(value));

  return (
    <div>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <Input
        focusBorderColor="pink.400"
        pr="2rem"
        placeholder="Enter query"
        type="text"
        name="filter"
        id="filter"
        value={filter}
        onChange={handleChange}
        w={250}
        ml={2}
      />
    </div>
  );
};
