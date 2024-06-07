import { useState } from 'react';
import * as styles from 'src/components/inputField/styles';
import { InputFieldInt } from 'src/components/inputField/types';

const InputField = ({
  label,
  placeholder,
  validate,
}: InputFieldInt): JSX.Element => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleBlur = (): void => {
    if (validate) {
      const validationError = validate(value);
      setError(validationError);
    }
  };

  return (
    <styles.Container>
      <styles.Label>{label}</styles.Label>
      <styles.Input
        type="text"
        placeholder={placeholder}
        value={value}
        hasError={!!error}
        onChange={e => setValue(e.target.value)}
        onBlur={handleBlur}
      />
      {error && <styles.Error>{error}</styles.Error>}
    </styles.Container>
  );
};

export default InputField;
