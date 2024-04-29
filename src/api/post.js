import axios from 'axios';
import { toast } from "sonner"


export const postDataQuery = async (url, data) => {
  try {
    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      const { message } = response.data
      toast(message)
      return response.data;
    } 
    else {
      return toast("Ooops, that wasn't supposed to happen. Something went wrong with your request.")
    }
  } catch (error) {
    toast("Ooops, we ran into something. You could try checking your internet connection to help fix this.")
    console.error('Post request failed', error);
    throw error;
  }
};