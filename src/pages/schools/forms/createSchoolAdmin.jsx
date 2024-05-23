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
import ListProvinces from "../../../custom/selectDropdown/listProvinces"
import { Loader2 } from "lucide-react"
import ListSchools from "../../../custom/selectDropdown/listSchools"

const formSchema = z.object({
  ecNumber: z.string().refine((value) => {
    if (value.length !== 6) return false; // Check length
    if (!/[A-Za-z]$/.test(value)) return false; // Check last character is a letter
    return true;
  }, {
    message: 'The Government ec number must be 6 characters long and end with a letter',
  }),
    email: z.string().min(10, {
    message: "Please use valid email address",
  }),
    password: z.string().min(8, {
    message: "Please a valid password",
  })
  })

export function CreateSchoolAdminForm() {
  const [isLoading, setLoading] = useState(false)

 // 1. Define your form.
const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ecNumber: "",
      email: "",
      provinceId: 1,
      schoolId: 1,
      password: ""
    },
  });
 
// 2. Define a submit handler.
async function onSubmit(values) {
  setLoading(true)
  const { provinceId, schoolId } = form.getValues(); // Access the provinceId value
  const updatedValues = { ...values, provinceId, schoolId }; // Include provinceId in the values object

  try {
    const url = `${baseUrl}/school-admins`; // Specify your API URL
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
            name="email"
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
                Preferably an alpha numeric strong password
              </FormDescription>
              <FormMessage />
            </FormItem>
            
          )}
        />

        <ListProvinces />

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
