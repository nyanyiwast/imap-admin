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
    fullName: z.string().toUpperCase().min(5, {
    message: "Admin's fullname is mandatory",
  }),
    email: z.coerce.string().toUpperCase().email().min(8, {
    message: "Please enter a valid email address",
  }),
    password: z.string().min(8, {
    message: "Password should be >= 8 characters",
  })
  })

export function CreateUsersForm() {
  const [isLoading, setLoading] = useState(false)

 // 1. Define your form.
const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      status: true,
      password: ""
    },
  });

 
// 2. Define a submit handler.
async function onSubmit(values) {
  setLoading(true)
  const { status, dateCreated } = form.getValues(); // Access the provinceId value
  const updatedValues = { ...values, status, dateCreated }; // Include provinceId in the values object

  try {
    const url = `${baseUrl}/admin-users`; // Specify your API URL
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
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormDescription>
                Enter the actual name and surname of the user
              </FormDescription>
              <FormMessage />
            </FormItem>
            
          )}
        />
        
        <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                    <Input type="email" placeholder="jdoe185@gmail.com" {...field} />
                </FormControl>
                <FormDescription>
                Use a valid email address that we can use to help you RESET / RETRIEVE a password in the future
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
                A minimum of 8 characters is accepted
              </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />    

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
