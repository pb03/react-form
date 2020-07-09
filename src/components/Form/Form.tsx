import React from 'react'
import { useForm, FormContext } from 'react-hook-form'

type Form = {
  initialValues?: any
  children: React.ReactNode
  onSubmit: (values: any, actions: any) => void
  className?: string
}

export const Form = ({ initialValues, children, onSubmit, className }: Form) => {
  const methods = useForm({ defaultValues: initialValues })

  return (
    <FormContext {...methods}>
      <form
        className={className}
        onSubmit={methods.handleSubmit(onSubmit)}
        noValidate
      >
        {children}
      </form>
    </FormContext>
  )
}
