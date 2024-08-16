import { APIURL } from '@/utils/SignupInterface'
import axios from 'axios'

export const CreateBlog = async (
  text: string,
  Name: string,
  title: string,
  email: string
) => {
  const Response = await axios.post(`${APIURL}/api/Posts`, {
    text,
    Name,
    title,
    email,
  })

  try {
    if (Response.status === 201) {
      return Response.data
    }
  } catch (error) {
    console.log('FUNCTION ERROR', error)
  }
}
