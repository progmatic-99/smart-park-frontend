import { Button, Flex,  Heading } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import Field from '../form/formFields'
import * as Yup from 'yup'

const signupSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Too short')
    .max(40, 'Too long')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Too short')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
})

const Signup = () => {  
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: ''
      }}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        console.dir(JSON.stringify(values))
        setSubmitting(false)
        resetForm()
      }}
      validationSchema={signupSchema}
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
              mb={8}
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
