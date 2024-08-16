import { APIURL } from '@/utils/SignupInterface'
import axios from 'axios'

export const UpdateBlogs = async (Text: string, POSTID: string) => {
  const Response = await axios.put(`${APIURL}/api/Update&Delete`, {
    Text,
    POSTID,
  })
  try {
    if (Response.status === 200) {
      return Response.data
    }
  } catch (error) {
    console.log('ERROR IN FUNCTION', error)
  }
}
