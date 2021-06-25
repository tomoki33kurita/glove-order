import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { TextField } from '@material-ui/core'

type Props = {
  name: string
  label: string
}

const ControlledTextField: React.FC<Props> = ({ name, label }) => {
  const { register, control } = useForm()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          id={field.name}
          label={label}
          multiline
          rows={5}
          {...register(name)}
          variant="outlined"
        />
      )}
    />
  )
}

export default ControlledTextField
