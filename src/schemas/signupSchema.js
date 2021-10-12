import * as Yup from 'yup';

export const signupSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Too short')
    .max(40, 'Too long')
    .required('Required'),
  password: Yup.string().min(8, 'Too short').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});
