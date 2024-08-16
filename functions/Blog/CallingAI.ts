import { APIURL } from '@/utils/SignupInterface'
import axios from 'axios'

export const CreateWithAI = async (title: String, text: String) => {
  try {
    const response = await axios.post(`${APIURL}/api/AI`, { text, title })

    if (response.status === 200) {
      console.log('API RESPONDED', response.data)
      return response.data
    } else {
      console.error('Error response status:', response.status)
      return null
    }
  } catch (error) {
    console.error('Error in RemoveBlog function:', error)
    return null
  }
}
