import { Button, Flex, Heading, useToast } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useContext } from 'react';
import { Link as ReactLink, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { loginUser } from '../../api/auth';
import { UserContext } from '../../context/userContext';
import Field from '../form/formFields';

const loginSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const Login = () => {
  const { setUser } = useContext(UserContext);
  const toast = useToast();
  let history = useHistory();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setSubmitting(false);

        try {
          const resp = await loginUser(values);
          toast({
            title: 'Congrats',
            description: 'Login Successful.',
            status: 'success',
            position: 'bottom',
            duration: 7000,
            isClosable: true,
          });

          setUser(resp);
          history.push('/user');
        } catch (err) {
          toast({
            title: `${err}`,
            description: 'Try again.',
            status: 'error',
            position: 'bottom',
            duration: 7000,
            isClosable: true,
          });
        }
        resetForm();
      }}
      validationSchema={loginSchema}
    >
      {({ isSubmitting }) => (
        <Form>
          <Flex height="100vh" alignItems="flex-start" justifyContent="center">
            <Flex direction="column" p={12} rounded={24}>
              <Heading color="white" textAlign="center" mb={4}>
                SmartPark
              </Heading>
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
                type="password"
              />
              <Button
                variant="primary"
                type="submit"
                disabled={isSubmitting}
                mb={6}
                mt={3}
              >
                Log In
              </Button>
              <Button variant="secondary" as={ReactLink} to="/signup">
                Sign Up
              </Button>
            </Flex>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
