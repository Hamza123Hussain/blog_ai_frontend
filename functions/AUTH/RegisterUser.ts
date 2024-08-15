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
      console.log('API RESPONDED :', Response.data)
    }
  } catch (error) {
    console.log('ERROR IN FUNCTION : ', error)
  }
}
