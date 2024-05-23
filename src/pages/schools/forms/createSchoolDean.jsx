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
    fullName: z.string().min(10, {
    message: "Please use valid address",
  }),
    password: z.string().min(8, {
    message: "Please use valid password",
  })
  })

export function CreateSchoolDeanForm() {
  const [isLoading, setLoading] = useState(false)

 // 1. Define your form.
const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ecNumber: "",
      fullName: "",
      password: "",
      provinceId: 1,
      schoolId: 1,
    },
  });
 
// 2. Define a submit handler.
async function onSubmit(values) {
  setLoading(true)
  const { schoolId, provinceId } = form.getValues(); // Access the provinceId value
  const updatedValues = { ...values, schoolId, provinceId }; // Include provinceId in the values object

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
                <Input className="uppercase" placeholder="John Doe" {...field} />
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

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                </FormControl>
                <FormDescription>
                Use a strong password
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
