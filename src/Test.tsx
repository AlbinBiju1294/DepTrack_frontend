import { grey } from '@mui/material/colors'
import React from 'react'
import Select from 'react-select'


const Test = () => {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
  return (
    <Select 
  options={options}
  styles={{
    control: (baseStyles, state) => ({
      ...baseStyles,
      width: 250,
      minHeight: '10px',
      maxHeight: '28px',
      fontSize: '11px',
      border: state.isFocused ? 'none' : 'none',
      outline: state.isFocused? '1px solid blue' : '1px solid black',
      boxShadow:'none',
      '&:hover': {  // styles for hover state
        borderColor: 'none',
      },
    //   padding: '0 5px',
    }),
    // singleValue: (provided) => ({
    //   ...provided,
    //   lineHeight: 'normal',
    // }),
    indicatorSeparator: (provided) => ({
      ...provided,
      minHeight: '18px',
      maxHeight: '20px',
      marginTop: 0,
      marginBottom: 0,
      alignSelf:'center'
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      minHeight: '10px',
      maxHeight: '28px',
      marginTop: '-8px',
       // Adjust the vertical alignment
    }),
    menu: (provided) => ({
      ...provided,
      marginTop:5,
      fontSize: 10,
      width:250
    }),
    option: (provided) => ({
      ...provided,
      fontSize: 10,
    }),
  }} 
/>

  )
}

export default Test