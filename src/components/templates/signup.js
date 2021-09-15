import { Button, Flex,  Heading } from '@chakra-ui/react'
import React from 'react'
import { Form, Formik } from 'formik'
import Field from '../form/formFields'

function validateEmail(value) {
  let error
  if (!value.email) {
    error = 'Required'
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.email)
  ) {
    error = 'Invalid email address'
  }
  return error
}

function validateName(value) {
  let error
  if(!value.name) {
    error = 'Name is required.'
  } else if (value.name.length < 3) {
    error = 'Name should be more than 2 characters'
  }
  return error
}

function validatePass(value) {
  let error
  if(!value.password) {
    error = 'Password required'
  } else if(value.password.length < 9) {
    error = 'Password should be more than 8 characters'
  }
  return error
}

const Signup = () => {  
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: ''
      }}
      onSubmit={(values) => {
        console.dir(JSON.stringify(values))
      }}
      validateOnBlur="true"
    >
        <Form>
          <Flex height="100vh" alignItems="flex-start" justifyContent="center">
            <Flex direction="column" p={12} rounded={24}>
              <Heading color="white" textAlign="center" mb={4}>Sign Up</Heading> 
              <Field
                label="Name"
                placeholder="name"
                name="name"
                type="text"
              />
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
                mb={6}
                type="password"
              />
              <Button variant="secondary" type="submit">Sign Up</Button>
            </Flex>
          </Flex>
        </Form>
    </Formik>
  )
}

export default Signup
