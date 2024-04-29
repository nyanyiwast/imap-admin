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
import ListSchools from "../../../custom/selectDropdown/listSchools"

const formSchema = z.object({
    ecNumber: z.string().min(7, {
    message: "EC Number field is mandatory",
  }),
    emailAddress: z.string().min(10, {
    message: "Please use valid address",
  }),
    schoolId: z.string().min(5, {
    message: "Please enter a valid school",
  })
  })

export function CreateSchoolDeanForm() {
  const [isLoading, setLoading] = useState(false)

 // 1. Define your form.
const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ecNumber: "",
      emailAddress: "",
      role: "ADMIN",
      schoolId: 1,
    },
  });
 
// 2. Define a submit handler.
async function onSubmit(values) {
  setLoading(true)
  const { provinceId, schoolId, role, status } = form.getValues(); // Access the provinceId value
  const updatedValues = { ...values, provinceId, schoolId, role, status }; // Include provinceId in the values object

  try {
    const url = `${baseUrl}/school-deans`; // Specify your API URL
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
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Registered School Representative Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormDescription>
                Preferably a school headmaster or deputy is advised
              </FormDescription>
              <FormMessage />
            </FormItem>
            
          )}
        />
        
        <FormField
            control={form.control}
            name="emailAddress"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                    <Input type="text" placeholder="johndoe@gmail.com" {...field} />
                </FormControl>
                <FormDescription>
                This is the valid email address that we will use to send you all latest updates
              </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />

        <FormField
            control={form.control}
            name="ecNumber"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Employee Number</FormLabel>
                <FormControl>
                    <Input type="text" placeholder="5562822M" {...field} />
                </FormControl>
                <FormDescription>
                The EC Number of the account holder gievn upon registering as a govt employee
              </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />    

        <ListSchools />

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
