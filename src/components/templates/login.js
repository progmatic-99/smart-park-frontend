import { Button, Flex, Heading } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import { Link as ReactLink } from 'react-router-dom'
import * as Yup from 'yup'
import Field from '../form/formFields'


const axios = require('axios').default

const handleLogin = async (values, { resetForm, setSubmitting }) => {
  try {
    await axios.post('/api/login', JSON.stringify(values))
  } catch {
    console.error(err)
  }
  setSubmitting(false)
  resetForm()
}

const loginSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required')
})

const Login = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      onSubmit={handleLogin}
      validationSchema={loginSchema}
    >
        <Form>
          <Flex height="100vh" alignItems="flex-start" justifyContent="center">
            <Flex direction="column" p={12} rounded={24}>
              <Heading color="white" textAlign="center" mb={4}>SmartPark</Heading> 
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
              <Button variant="primary" type="submit" mb={6}>Log In</Button>
              <Button variant="secondary" as={ReactLink} to="/signup" >Sign Up</Button>
            </Flex>
          </Flex>
        </Form>
    </Formik>
  )
}

export default Login
