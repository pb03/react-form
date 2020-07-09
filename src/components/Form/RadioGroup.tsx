import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Error } from './Error'

type Option = {
  label: string
  value: string
}

type RadioGroup = {
  name: string
  label: string
  defaultValue?: string
  options: Option[]
  required?: boolean | string
}

export const RadioGroup = ({
  name,
  label,
  defaultValue,
  options,
  required
}: RadioGroup) => {
  const { register, errors } = useFormContext()

  return (
    <div>
      <div className="label">{label}</div>
      <div className="radio-group">
        {options &&
          options.map((option: Option) => (
            <label className="radio" key={option.value}>
              <input
                type="radio"
                name={name}
                className="radio__input"
                defaultChecked={defaultValue === option.value}
                value={option.value}
                ref={register({ required })}
              />
              {option.label}
            </label>
          ))}
      </div>
      {errors[name] && <Error message={errors[name].message} />}
    </div>
  )
}
