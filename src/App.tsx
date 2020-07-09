import React from 'react'
import { Form, Input, Dropdown, RadioGroup, Checkbox, Button } from './components/Form'
import './App.css'

const radioOptions = [
  { label: "Audio", value: "audio" },
  { label: "Text", value: "text" }
]

const dropdownOptions = [
  { text: 'Thinking with Type', value: 'thinking-with-type' },
  { text: 'Grid Systems in Graphic Design', value: 'grid-systems' },
  { text: 'Logo Modernism', value: 'logo-modernism' }
]

const App = () => {
  const handleSubmit = (values: any) => console.log(values)

  return (
    <div className="app">

      <Form className="form" onSubmit={handleSubmit}>
        <h2>Download Book</h2>
        <RadioGroup name="format" label="Format" options={radioOptions} required="Select format" />
        <Dropdown name="book" label="Book" options={dropdownOptions} required="Select a book" />
        <hr />
        <Input name="name" label="Name" required />
        <Input
          name="email"
          label="Email"
          type="email"
          validation={{
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email"
            }
          }}
        />
        <hr />
        <Checkbox name="terms" label="Accept terms of service" required="Accept terms" />
        <Button>Download</Button>
      </Form>
    </div>
  )
}

export default App
