import React from 'react'
import { useFormContext } from 'react-hook-form'

type Button = {
  children: React.ReactNode
}

export const Button = ({ children }: Button) => {
  const { formState: { isDirty, isSubmitting } } = useFormContext()

  return (
    <button className="button" type="submit" disabled={!isDirty || isSubmitting}>
      {children}
    </button>
  )
}
