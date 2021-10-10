import React from 'react';
import Field from '../form/formFields';
import { FaEye } from 'react-icons/fa';

const PasswordInput = () => {
  const [show, setShow] = React.useState(false);

  return (
    <Field
      label="Password"
      placeholder="password"
      name="password"
      type={show ? 'text' : 'password'}
    >
      <FaEye onClick={() => setShow(!show)}></FaEye>
    </Field>
  );
};

export default PasswordInput;
