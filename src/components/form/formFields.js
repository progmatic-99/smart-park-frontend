import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import { useField } from 'formik'

const Field = ({ label, ...props }) => {
  const [ field, meta ] = useField(props)
  return (
    <FormControl isRequired>
      <FormLabel htmlFor={props.id || props.name} color="white">{label}</FormLabel>
      <Input {...field} {...props} variant="filled" mb={4}/>
      {meta.error && meta.touched ? (
        <div className="error" style={{color: "red", fontSize: "14px", fontWeight: "700"}}>{meta.error}</div>
      ) : null}
    </FormControl>
  )
}

export default Field
