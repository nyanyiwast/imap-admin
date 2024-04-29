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
import ListUniversities from "../../../custom/selectDropdown/listUniversities"
import ListProvinces from "../../../custom/selectDropdown/listProvinces"

const formSchema = z.object({
    fullName: z.string().min(5, {
    message: "Term name field is mandatory and must be valid",
  }),
  emailAddress: z.string().min(5, {
    message: "Field is mandatory and must be valid",
  }),
  ecNumber: z.string().min(5, {
    message: "Field is mandatory and must be valid",
  })
  })

export function CreateUniversityUsersForm() {
  const [isLoading, setLoading] = useState(false)

 // 1. Define your form.
const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      ecNumber: "",
      emailAddress: "",
      role: "ADMIN",
      status: true,
      provinceId: 1,
      universityId: 1,
      dateCreated: new Date()
    },
  });
 
// 2. Define a submit handler.
async function onSubmit(values) {
  setLoading(true)
  const { role, status, provinceId, universityId, dateCreated } = form.getValues(); // Access the provinceId value
  const updatedValues = { ...values, role, status, provinceId, universityId, dateCreated }; // Include provinceId in the values object

  try {
    const url = `${baseUrl}/university-admins`; // Specify your API URL
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
                The full name as stated on the government issued ID
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
                <Input type="email" placeholder="johndoe185@gmail.com" {...field} />
              </FormControl>
              <FormDescription>
                Use a valid email address, which we can use on account recovery, etc.
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
              <FormLabel>Employee Code Number</FormLabel>
              <FormControl>
                <Input placeholder="1234567K" {...field} />
              </FormControl>
              <FormDescription>
                The EC Number gievn to the employee upon employment
              </FormDescription>
              <FormMessage />
            </FormItem>
            
          )}
        />

        <ListUniversities />

        <ListProvinces />


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
