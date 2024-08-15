import { APIURL } from '@/utils/SignupInterface'
import axios from 'axios'

export const LoginUser = async (Inputvalue: any) => {
  const { email, password } = Inputvalue
  try {
    const Response = await axios.post(`${APIURL}/api/Users/Login`, {
      email,
      password,
    })
    if (Response.status === 200) {
      //   console.log('API HAS RESPONDED : ', Response.data)
      return Response.data
    }
  } catch (error) {
    console.log('FUNCTION ERROR', error)
  }
}
