import { Button, Flex, Heading, useToast } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import Field from '../form/formFields';
import * as Yup from 'yup';
import { signupUser } from '../../api/auth';
import { Link as ReactLink } from 'react-router-dom';

const signupSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Too short')
    .max(40, 'Too long')
    .required('Required'),
  password: Yup.string().min(8, 'Too short').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const Signup = () => {
  const toast = useToast();

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
          const resp = await signupUser(values);
          toast({
            title: 'Account created.',
            description: 'Login with your email.',
            status: 'success',
            position: 'top',
            duration: 7000,
            isClosable: true,
          });
        } catch (err) {
          toast({
            title: 'Email already exists.',
            description: 'Try with a different email.',
            status: 'error',
            position: 'top',
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
              <Field
                label="Password"
                placeholder="password"
                name="password"
                mb={8}
                type="password"
              />
              <Button
                variant="secondary"
                type="submit"
                mb={4}
                disabled={isSubmitting}
              >
                Sign Up
              </Button>
              <Button variant="primary" as={ReactLink} to="/login">
                Log In
              </Button>
            </Flex>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export default Signup;
