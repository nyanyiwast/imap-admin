import axios from 'axios';
import { toast } from "sonner"

export const getTotalDataQuery = async (url) => {
  try {
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 10_000 // this equates to 10 seconds
    });

    const { message } = response.data

    if (response.status === 200 || response.status === 201) {
        toast.success(message);
        return response.data.data.reduce((count, item) => {
        if (item) {
          return count + 1;
        }
        return count;
      }, 0);
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
      console.error('GET request failed', error)
      throw error;
    }
  }
};