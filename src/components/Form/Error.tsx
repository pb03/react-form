import React from 'react'

type Error = {
  message: string
}

export const Error = ({ message }: Error) => (
  <div className="error">
    {message}
  </div>
)

