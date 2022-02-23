import React from 'react'
import TextField from '@mui/material/TextField'
function TextFieldComponent({
  margin,
  id,
  label,
  name,
  autoComplete,
  onChange,
}: any) {
  return (
    <TextField
      onChange={onChange}
      margin={margin}
      id={id}
      label={label}
      name={name}
      autoComplete={autoComplete}
      required
      fullWidth
      autoFocus
    />
  )
}

export default TextFieldComponent
