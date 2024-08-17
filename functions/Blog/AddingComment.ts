import { APIURL } from '@/utils/SignupInterface'
import axios from 'axios'

export const Addcomment = async (
  message: string,
  UserID: string,
  POSTID: string
) => {
  const Response = await axios.post(`${APIURL}/api/Comments`, {
    message,
    UserID,
    POSTID,
  })
  try {
    if (Response.status === 200) {
      console.log('API RESPONSED ', Response.data)
      return Response.data
    }
  } catch (error) {
    console.log('FUNCTION ERROR', error)
  }
}
