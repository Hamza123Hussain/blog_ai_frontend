import { APIURL } from '@/utils/SignupInterface'
import axios from 'axios'

export const CreateBlog = async (text: string, Name: string, title: string) => {
  const Response = await axios.post(`${APIURL}/api/Posts`, {
    text,
    Name,
    title,
  })

  try {
    if (Response.status === 201) {
      return Response.data
    }
  } catch (error) {
    console.log('FUNCTION ERROR', error)
  }
}
