import React, { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { useSelect } from 'downshift'
import { Error } from './Error'

type Option = {
  text: string
  value: string
}

type Dropdown = {
  name: string
  options: Option[]
  label: string
  initialValue?: string
  placeholder?: string
  required?: boolean | string
}

export const Dropdown = ({
  name,
  options,
  label,
  initialValue,
  placeholder = "Select...",
  required
}: Dropdown) => {
  const { register, setValue, getValues, errors, clearError } = useFormContext()
  const error = errors[name]

  const getInitialItem = () => {
    const defaultValue = initialValue || getValues()[name]
    if (defaultValue) {
      return options.find((o: Option) => o.value === defaultValue)
    }
  }

  const {
    isOpen,
    selectedItem,
    selectedItem: dsSelectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps
  } = useSelect({
    items: options,
    initialSelectedItem: getInitialItem()
  })

  useEffect(() => {
    if (selectedItem) {
      setValue(name, selectedItem.value)
      error && clearError(name)
    }
  }, [selectedItem, name, setValue, error, clearError])

  return (
    <div className="dropdown-container">
      <label className="label" {...getLabelProps()}>{label}</label>
      <button className="dropdown-trigger" type="button" {...getToggleButtonProps()}>
        <input name={name} type="hidden" ref={register({ required })} />
        <div>{selectedItem ? selectedItem.text : placeholder}</div>
        <span className="chevron">⌃</span>
      </button>
      <div {...getMenuProps()}>
        {isOpen &&
          <div className="dropdown">
            {options.map((item: Option, index: number) => {
              const isActive = highlightedIndex === index || dsSelectedItem === item
              return (
                <div
                  key={`${item.value}${index}`}
                  className={`dropdown-item ${isActive ? 'is-active' : ''}`}
                  {...getItemProps({ item, index })}
                >
                  {item.text}
                </div>
              )
            })}
          </div>
        }
      </div>
      {error && <Error message={error.message} />}
    </div>
  )
}
