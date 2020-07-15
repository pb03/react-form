import React from 'react'
import { FormProvider } from 'react-hook-form'

type DumbForm = {
  children: React.ReactNode
  onSubmit: (values: any, actions: any) => void
  provider: any
  className?: string
}

export const DumbForm = ({ children, onSubmit, provider, className }: DumbForm) => (
  <FormProvider {...provider}>
    <form
      className={className}
      onSubmit={provider.handleSubmit(onSubmit)}
      noValidate
    >
      {children}
    </form>
  </FormProvider>
)

