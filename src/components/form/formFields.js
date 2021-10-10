import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { useField } from 'formik';

const Field = ({ label, ...props }) => {
  const { children, ...attrs } = props;
  const [field, meta] = useField(attrs);

  return (
    <FormControl isRequired>
      <FormLabel htmlFor={attrs.id || attrs.name} color="white">
        {label}
      </FormLabel>
      <InputGroup>
        <Input
          {...field}
          {...attrs}
          variant="filled"
          mb={4}
          focusBorderColor="brand.100"
        />
        <InputRightElement>{children}</InputRightElement>
      </InputGroup>
      {meta.error && meta.touched ? (
        <div
          className="error"
          style={{ color: 'red', fontSize: '14px', fontWeight: '700' }}
        >
          {meta.error}
        </div>
      ) : null}
    </FormControl>
  );
};

export default Field;
