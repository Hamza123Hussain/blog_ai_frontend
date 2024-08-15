import { APIURL, InputValues } from '@/utils/SignupInterface'
import axios from 'axios'

export const RegisterUser = async (InputValues: InputValues) => {
  const { email, password, Name } = InputValues

  try {
    const Response = await axios.post(`${APIURL}/api/Users`, {
      email,
      password,
      Name,
    })

    if (Response.status === 201) {
      return Response.data
    } else if (
      Response.status === 400 &&
      Response.data.message === 'Email already in use'
    ) {
      alert('This email is already registered. Please use a different email.')
    } else if (Response.status === 500) {
      alert('Internal server error. Please try again later.')
    }
  } catch (error) {
    console.log('ERROR IN FUNCTION : ', error)
    alert('Email Already Registered')
  }
}
