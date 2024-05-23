"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { postDataQuery } from "../../../api/post"
const baseUrl = import.meta.env.VITE_BASE_URI
import { useState } from "react"


import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
    name: z.string().min(5, {
    message: "Please use valid subject name",
  })
  })

export function CreateOLevelSubjectsForm() {
  const [isLoading, setLoading] = useState(false)

 // 1. Define your form.
const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });
 
// 2. Define a submit handler.
async function onSubmit(values) {
  setLoading(true)
  const updatedValues = { ...values }; // Include provinceId in the values object

  try {
    const url = `${baseUrl}/o-level-subjects`; // Specify your API URL
    const response = await postDataQuery(url, updatedValues);
    console.log('Response:', response);
    setLoading(false)
  } catch (error) {
    setLoading(false)
    console.error('Error:', error);
    // Handle the error appropriately
  }
}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 md:w-1/2 w-full p-5 md:p-0">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter Subject Name</FormLabel>
              <FormControl>
                <Input className="uppercase" placeholder="Mathematics" {...field} />
              </FormControl>
              <FormDescription>
                Subjects are unique
              </FormDescription>
              <FormMessage />
            </FormItem>
            
          )}
        />


        { isLoading ?
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
        :
        <Button type="submit">Proceed</Button>
        }
      </form>
    </Form>
  )
}
