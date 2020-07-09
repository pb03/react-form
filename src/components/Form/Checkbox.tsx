import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Error } from './Error'

type Checkbox = {
  label: string
  name: string
  required?: boolean | string
}

export const Checkbox = ({ label, name, required }: Checkbox) => {
  const { register, errors } = useFormContext()

  return (
    <div>
      <label className="checkbox">
        <input
          type="checkbox"
          className="checkbox__input"
          name={name}
          ref={register({ required })}
        />
        {label}
      </label>
      {errors[name] && <Error message={errors[name].message} />}
    </div>
  )
}
