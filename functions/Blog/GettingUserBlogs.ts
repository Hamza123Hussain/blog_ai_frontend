import { APIURL } from '@/utils/SignupInterface'
import axios from 'axios'

export const GettingUserBlogs = async (Name: string) => {
  const Response = await axios.get(`${APIURL}/api/User/?Name=${Name}`)
  try {
    if (Response.status === 200) {
      // console.log('API RESPONSED ', Response.data)
      return Response.data
    }
  } catch (error) {
    console.log('FUNCTION ERROR', error)
  }
}
