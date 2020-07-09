import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Error } from './Error'

type Input = {
  label: string
  name: string
  type?: 'text' | 'email' | 'tel'
  required?: boolean | string
  validation?: { [key: string]: any }
}

export const Input = ({
  label,
  name,
  type = 'text',
  required,
  validation
}: Input) => {
  const { register, errors } = useFormContext()

  return (
    <div>
      <label className="label" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        className="input"
        ref={register(validation || { required: !!required })}
      />
      {errors[name] && <Error message={errors[name].message} />}
    </div>
  )
}
