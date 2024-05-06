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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"
import { DatePickerWithRange } from "../../../custom/calendar/dateRange"

const formSchema = z.object({
    name: z.string().min(5, {
    message: "Term name field is mandatory and must be valid",
  })
  })

export function CreateSchoolTermForm() {
  const [isLoading, setLoading] = useState(false)

 // 1. Define your form.
const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      startApplicationDate: new Date(),
      endApplicationDate: new Date()
    },
  });
 
// 2. Define a submit handler.
async function onSubmit(values) {
  setLoading(true)
  const { startApplicationDate, endApplicationDate } = form.getValues(); // Access the provinceId value
  const updatedValues = { ...values, startApplicationDate, endApplicationDate }; // Include provinceId in the values object

  try {
    const url = `${baseUrl}/school-terms`; // Specify your API URL
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
              <FormLabel>School Term</FormLabel>
              <FormControl>
                <Input placeholder="Term 1 2024" {...field} />
              </FormControl>
              <FormDescription>
                Try to use a unique naming that users can be able to see and relate to when applying
              </FormDescription>
              <FormMessage />
            </FormItem>
            
          )}
        />

      <DatePickerWithRange />
      
        { !isLoading ?
        <Button type="submit">Proceed</Button>
        :
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
        }
      </form>
    </Form>
  )
}
