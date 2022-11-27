import React from 'react'
import Input from '../components/FormElements/Input'
import Button from '../components/FormElements/Button'
import { VALIDATOR_REQUIRE} from '../components/FormElements/validators'
import { useForm } from '../hooks/form-hook'
import './PlaceForm.css'

const BookingPage = () => {
  const [formState, inputHandler] = useForm({
    title: {
      value: '',
      isValid: false
    },
    description: {
      value: '',
      isValid: false
    },
    address: {
      value: '',
      isValid: false
    }
  }, false)

  const onSubmitHandler=(e)=>{
    e.preventDefault()
    console.log(formState.inputs)
  }

  return (
    <form className='place-form' onSubmit={onSubmitHandler}>

      <Input
        id="title"
        element="input" type="text" label="Title" errorText="Invalid Title"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="input" type="text" label="Description" errorText="Invalid Description"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
      />
      <Input
        id="address"
        element="input" type="text" label="Address" errorText="Invalid Address"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
      />
  <Button type="submit" disabled={!formState.isValid} >
    Confirm Booking
  </Button>

    </form>
  )
}

export default BookingPage
