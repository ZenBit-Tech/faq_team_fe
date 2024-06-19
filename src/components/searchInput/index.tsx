import { Container, Input } from './styles';
import { InputProps } from './types';

const SearchInput = ({ placeholder, value, onChange }: InputProps) => {
  return (
    <Container>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Container>
  );
};

export default SearchInput;
