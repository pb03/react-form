import React from 'react'
import { useFormContext } from 'react-hook-form'

type Button = {
  children: React.ReactNode
}

export const Button = ({ children }: Button) => {
  const { formState: { dirty, isSubmitting } } = useFormContext()

  return (
    <button className="button" type="submit" disabled={!dirty || isSubmitting}>
      {children}
    </button>
  )
}
