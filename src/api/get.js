import axios from 'axios';
import { toast } from "sonner"

export const getDataQuery = async (url) => {
  try {
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 10_000 // this equates to 10 seconds
    });

    const { message } = response.data

    if (response.status === 200 || response.status === 201) {
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
    }
    toast.error("Oops, we ran into something. You could try checking your internet connection to help fix this.");
    console.error('GET request failed', error)
    throw error;
  }
};