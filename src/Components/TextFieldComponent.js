import { TextField } from '@mui/material';
import React, { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

const TextFieldComponent = ({name, type, placeholder}) => {
    const {control} = useFormContext();
  return (
    <Controller
    name={name}
    control={control}
    render={({field: {onChange, onBlur, value, ref}}) => (
        <input className="form-input mb-4 w-full h-10 border border-gray-300 p-3" type={type} value={value} placeholder={placeholder} ref={ref} onBlur={onBlur} onChange={onChange} /> 
    )}
     />
  )
}

export default TextFieldComponent;