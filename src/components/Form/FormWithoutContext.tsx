import React from 'react'
import { FormContext } from 'react-hook-form'

type FormWithoutContext = {
  children: React.ReactNode
  onSubmit: (values: any, actions: any) => void
  className?: string
  form: any
}

export const FormWithoutContext = ({ children, onSubmit, className, form }: FormWithoutContext) => (
  <FormContext {...form}>
    <form
      className={className}
      onSubmit={form.handleSubmit(onSubmit)}
      noValidate
    >
      {children}
    </form>
  </FormContext>
)

