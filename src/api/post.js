import axios from 'axios';
import { toast } from "sonner"


export const postDataQuery = async (url, data) => {
  try {
    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 10_000 // this equates to 10 seconds
    });

    const { message } = response.data

    if (response.status === 200) {
      toast.success(message)
      return response.data
    } 
    else {
      return toast.warning(message)
    }
  } catch (error) {
    if (error.response && error.response.status === 406) {
      toast.warning(error.response.data.message)
      return error.response.status
    } else {
      toast.error("Ooops, we ran into something. You could try checking your internet connection to help fix this.");
      console.error('Post request failed', error)
      throw error;
    }
  }
};