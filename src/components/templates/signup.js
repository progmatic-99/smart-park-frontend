import { Button, Flex, Heading, useToast } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import Field from '../form/formFields';
import { signupUser } from '../../api/auth';
import PasswordInput from '../form/password';
import { signupSchema } from '../../schemas/signupSchema';
import { useHistory } from 'react-router-dom';

const Signup = () => {
  const toast = useToast();
  const history = useHistory();

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={async (values, { resetForm, setSubmitting }) => {
        setSubmitting(false);

        try {
          await signupUser(values);
          toast({
            title: 'Account created.',
            description: 'Login with your email.',
            status: 'success',
            position: 'bottom',
            duration: 7000,
            isClosable: true,
          });
          history.push('/login');
        } catch (err) {
          toast({
            title: 'Email already exists.',
            description: 'Try with a different email.',
            status: 'error',
            position: 'bottom',
            duration: 7000,
            isClosable: true,
          });
        }
        resetForm();
      }}
      validationSchema={signupSchema}
    >
      {({ isSubmitting }) => (
        <Form>
          <Flex height="100vh" alignItems="flex-start" justifyContent="center">
            <Flex direction="column" p={12} rounded={24}>
              <Heading color="white" textAlign="center" mb={4}>
                Sign Up
              </Heading>
              <Field label="Name" placeholder="name" name="name" type="text" />
              <Field
                label="Email"
                placeholder="email address"
                name="email"
                type="email"
              />
              <PasswordInput />
              <Button
                variant="secondary"
                type="submit"
                mb={4}
                disabled={isSubmitting}
              >
                Sign Up
              </Button>
            </Flex>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export default Signup;
